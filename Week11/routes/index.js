const route = require('express').Router()
const movieRoute = require('./todo')

route.use('/', movieRoute)

module.exports = route
