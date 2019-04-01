const express = require('express');
const server = express();
const helmet= require('helmet');

server.use(express.json());
server.use(helmet());

const login = require('./router/login.js')
const register = require('./router/register.js')
const users =require('./router/users.js')

server.use('/api/login', login);
server.use('/api/register', register);
server.use('/api/users', users);

server.get('/', (req,res) => {
  res.send("It is working");
});


const port = 3000;
server.listen(port, ()=>  {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});