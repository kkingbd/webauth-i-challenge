const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const bcrypt = require('bcryptjs');
//const db= require('../data/userdb')
const db = knex(knexConfig.development);

router.post('/', async (req, res)=> {
    try{
        let credentials =req.body;
        const hash = bcrypt.hashSync(credentials.password, 12);
        credentials.password =hash;
        
        const newUser = await db('users').insert(credentials);
        res.status(200).json(newUser);
    } catch (err){
        res.status(500).json({message: "There is an error happened, try to register again"});
    }
})


module.exports = router;