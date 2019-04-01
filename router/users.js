
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const userDb= require('../data/userdb')