var express = require('express')
var route = express.Router()
const controller = require('../controllers/index')

// ROUTING
route.get('/show', controller.filmShowAll)
route.get('/show/:film_id', controller.filmShowID)
route.get('/film-category', controller.categoryAll)
route.get('/film-category/:category', controller.filmCategory)



module.exports = route;