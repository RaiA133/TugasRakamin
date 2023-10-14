const express = require('express');
const middlewares = require('../middlewares');
const route = express.Router();
const controller = require('../controllers/index');

// ROUTING
route.post('/register', middlewares.checkUserExistenceByEmail, controller.register) 


module.exports = route;