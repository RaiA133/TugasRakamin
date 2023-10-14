const express = require('express');
const middlewares = require('../middlewares');
const route = express.Router();
const controller = require('../controllers/index');

// ROUTING
route.post('/login', middlewares.checkUserExistence, controller.login) 


module.exports = route;