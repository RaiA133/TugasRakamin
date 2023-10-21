// routes/userRoutes.js
const express = require('express');
const Controller = require('../controllers');
const router = express.Router();

router.post('/users', Controller.createUser);
router.put('/users/:id', Controller.updateUser);
router.get('/users', Controller.findAllUsers);
router.delete('/users/:id', Controller.deleteUser);
router.get('/users/:id', Controller.findUser);

module.exports = router;
