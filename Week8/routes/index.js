var express = require('express')
var route = express.Router()

const filmRoute = require('./film')
const actorRoute = require('./actor')

route.use('/actor', actorRoute)
route.use('/film', filmRoute)

module.exports = route;