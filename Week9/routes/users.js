const express = require('express');
const middlewares = require('../middlewares');
const route = express.Router();
const controller = require('../controllers/index');

// ROUTING
route.get('/data', middlewares.verifyToken, controller.getAllUsers);
route.delete('/data/delete/:id', middlewares.checkUserExistenceById, middlewares.verifyToken, controller.deleteUsersById);


module.exports = route;