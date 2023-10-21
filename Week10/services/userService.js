// services/userService.js
const userRepository = require('../repositories/movies');

class UserService {
  createUser(args) {
    return userRepository.create(args);
  }

  updateUser(id, args) {
    return userRepository.update(id, args);
  }

  findAllUsers(args) {
    return userRepository.findAll(args);
  }

  deleteUser(id) {
    return userRepository.delete(id);
  }

  findUser(id) {
    return userRepository.find(id);
  }
}

module.exports = new UserService();
