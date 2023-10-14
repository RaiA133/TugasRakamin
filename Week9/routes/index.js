const express = require('express');
const route = express.Router();

const moviesRoute = require('./movies')
const registerRoute = require('./register')
const loginRoute = require('./login')
const usersRoute = require('./users')

// isi file route tujuan harus ada jika ingin code ini bejalan
route.use('/auth', registerRoute)
route.use('/auth', loginRoute)
route.use('/movies', moviesRoute)   
route.use('/user', usersRoute)

module.exports = route;