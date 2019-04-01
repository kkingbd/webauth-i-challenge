const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const bcrypt = require('bcryptjs');

const db= require('../data/userdb')