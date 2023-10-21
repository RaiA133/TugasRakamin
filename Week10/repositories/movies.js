const {users} = require('../models');

module.exports = {
  create(args) {
    return users.create(args);
  },

  update(id, args) {
    return users.update(args, {
      where: {
        id,
      },
      paranoid: false,
    });
  },

  findAll(args) {
    return users.findAll(args);
  },

  delete(id) {
    return users.destroy({where: {id}});
  },

  find(id) {
    return users.findByPk(id);
  }
};