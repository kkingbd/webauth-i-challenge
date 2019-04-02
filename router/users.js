const express = require('express');
const router = express.Router();
const userDb= require('../data/userdb.js');

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
  try {
    if(req && req.session && req.session.user){
      next();
    }else{
      res.status(401).json({message : "Invalid credentials"})
    }   
  } catch (error) {
    res.status(500).json({message: 'you broke the it'})
  }
}


module.exports = router;