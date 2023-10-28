'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addTodos = [
      {
        title: 'Judul Pertama',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Judul Kedua',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Judul Ketiga',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Todos', addTodos, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {})
  }
}
