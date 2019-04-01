const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const bcrypt = require('bcryptjs');

const db= require('../data/userdb');
//const db = knex(knexConfig.development);

router.post('./', async(req, res)=> {
    try{
        const credentials = req.body;
        const input = await db('users')
        .where({username: credentials.username, password: credentials.password})
        .first();
        if(input && bcrypt.compareSync(credentials.password, input.password)){
            req.session.input = input;
            res.status(200).json({message: "You succesfully logged in"} );
        }else{
            res.status(401).json({message: 'You shall not pass'});
        }
    }catch(error){
        res.status(500).json({message: "There was an error trying to log in. Please try again."})
      };
});


module.exports = router;
