var express = require('express')
var route = express.Router()
const controller = require('../controllers/index')

// ROUTING
route.get('/seeding', controller.seedingActor)
route.get('/show', controller.showActor)
route.get('/migrate-up', controller.migrateActorUp);
route.get('/migrate-down', controller.migrateActorDown);



module.exports = route;