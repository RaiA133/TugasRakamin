const express = require('express');
const middlewares = require('../middlewares');
const route = express.Router();
const controller = require('../controllers/index');

/**
 * @swagger
 * /auth/register:
 *   post:
 *     description: Register a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username of the user
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: Password of the user
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully registered
 */

// ROUTING
route.get('/data', middlewares.verifyToken, controller.getAllMovies) // READ
route.get('/data/:id', middlewares.verifyToken, controller.getMoviesById) // READ BY ID
route.post('/data/post', middlewares.verifyToken, controller.postMovies) // CREATE 
route.put('/data/update/:id', middlewares.checkMovieExistence, middlewares.verifyToken, controller.updateMoviesById); // UPDATE BY ID
route.delete('/data/delete/:id', middlewares.checkMovieExistence, middlewares.verifyToken, controller.deleteMoviesById) // DELETE BY ID


module.exports = route;