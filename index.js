const express = require('express');
const server = express();
const cors = require('cors');
const helmet= require('helmet');
const session = require('express-session');
const sessionConfig = require('./data/session-config.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

const login = require('./router/login.js')
const register = require('./router/register.js')
const users =require('./router/users.js')
const logout =require('./router/logout.js')

server.use(session(sessionConfig));
server.use('/api/login', login);
server.use('/api/register', register);
server.use('/api/users', users);
server.use('/api/logout', logout);

server.get('/', (req,res) => {
  res.send("It is working");
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));