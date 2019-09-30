const express = require('express');

const Users = require('./data/db.js');

const server = express();

server.use(express.json());


/***************************************
 * GET REQUEST
 **************************************/
      server.get('/', (req, res) => {
        res.json({message:'The api is working'});
      });

/***************************************
 * POST REQUEST
 **************************************/
server.post('/api/users',(req,res)=>{
  if(!req.body.name || !req.body.bio){
    res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
  } else {
    Users.insert(req.body)
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
/***************************************
 * DELETE REQUEST
 **************************************/

const port = 8000;
server.listen(port, () => console.log(`\n*** API on port ${port} ***\n`));