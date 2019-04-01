const express = require('express');
const server = express();
const helmet= require('helmet');

server.use(express.json());
server.use(helmet());

const users = require('./router/users.js')

server.use('/api/users', users);

const port = 3000;
server.listen(port, ()=>  {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});