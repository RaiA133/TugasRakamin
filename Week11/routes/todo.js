const route = require('express').Router();
const mainController = require('../controllers/mainController');

route.get('/health-check', mainController.healthCheck);
route.get('/', mainController.index);
route.get('/:id', mainController.todoById);
route.post('/create', mainController.createTodo);
route.put('/update/:id', mainController.updateTodo);
route.put('/delete/:id', mainController.deleteTodo);
route.put('/restore/:id', mainController.restoreTodo);

module.exports = route;