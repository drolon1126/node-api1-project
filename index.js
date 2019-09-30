const express = require('express');

const Users = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({message:'The api is working'});
});

const port = 8000;
server.listen(port, () => console.log(`\n*** API on port ${port} ***\n`));