'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      const addUsers = [
        {
          email: "raie@gmail.com",      
          gender: "male",
          password: "admin",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "rina@gmail.com",      
          gender: "female",
          password: "123",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "sarah@gmail.com",      
          gender: "female",
          password: "321",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
  
      return queryInterface.bulkInsert('users', addUsers, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
