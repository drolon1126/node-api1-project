const express = require('express');
const cors = require('cors');

const Users = require('./data/db.js');

const server = express();

server.use(express.json());
server.use(cors());


/***************************************
 * GET REQUEST
 **************************************/
      server.get('/', (req, res) => {
        res.json({message:'The api is working'});
      });

      server.get('/api/users', (req,res)=>{
        Users
          .find()
          .then(users=>{
            res.status(200).json(users);
          })
          .catch(()=>{
            res.status(500).json({errorMessage:'The users information could not be retrieved.'});
          });
      });
      
      server.get('/api/users/:id', (req,res)=>{
        Users
          .findById(req.params.id)
          .then(user=>{
            if(user){
              res.status(200).json(user);
            } else {
              res.status(404).json({errorMessage:'The user with the specified ID does not exist.'});
            }
          
          })
          .catch(()=>{
            res.status(500).json({errorMessage:'The user information could not be retrieved.'});
          });
      });

/***************************************
 * POST REQUEST
 **************************************/
server.post('/api/users',(req,res)=>{
  if(!req.body.name || !req.body.bio){
    res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
  } else {
    Users
      .insert(req.body)
      .then(user=>{
        res.status(201).json(user);
      })
      .catch(()=>{
        res.status(500).json({errorMessage:'There was an error while saving the user to the database'});
      });
  }

});

/***************************************
 * PUT REQUEST
 **************************************/
server.put('/api/users/:id', (req, res) => {
  if(!req.body.name || !req.body.bio){
    res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
  }else {
    Users
      .update(req.params.id, req.body)
      .then(user=>{
        if(user){
          res.status(200).json(user);
        } else {
          res.status(404).json({message:'The user with the specified ID does not exist.'});
        }
      })
      .catch(()=>{
        res.status(500).json({errorMessage:'The user information could not be modified.'})
      })
  }
})

/***************************************
 * DELETE REQUEST
 **************************************/

server.delete('/api/users/:id',(req,res)=>{
  Users
  .findById(req.params.id)
  .then(user=>{
    if(user){
      Users.remove(req.params.id)
      .then(()=>{
          res.status(200).json(user);
      })
      .catch(()=>{
        res.status(500).json({errorMessage:'The user could not be removed'});
      });
    } else {
      res.status(404).json({errorMessage:'The user with the specified ID does not exist.'});
    }
  })
  .catch(()=>{
    res.status(500).json({errorMessage:'The user information could not be retrieved.'});
  });    
});

const port = 8000;
server.listen(port, () => console.log(`\n*** API on port ${port} ***\n`));