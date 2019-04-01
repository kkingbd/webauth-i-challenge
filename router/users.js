const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const bcrypt = require('bcryptjs');

const userDb= require('../data/userdb');
//const db = knex(knexConfig.development);


router.get('/', restricted, (req, res) => {
        userDb.find()
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                res.status(500).send(err);
            })
});

function restricted(req, res, next) {
    const { username, password } = req.headers;
  
    if (username && password) {
        userDb.findBy({ username })
        .first()
        .then(user => {
          // check tha password guess against the database
          if (user && bcrypt.compareSync(password, user.password)) {
            next();
          } else {
            res.status(401).json({ message: 'You shall not pass!!' });
          }
        })
        .catch(error => {
          res.status(500).json(error);
        });
    } else {
      res.status(401).json({ message: 'Please provide credentials' });
    }
}
module.exports = router;