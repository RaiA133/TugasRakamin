'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addMovies = [
      {
        title: "Movie 1",      
        genres: "Action",
        year: "2023",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Movie 2",      
        genres: "Comedy",
        year: "2010",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Movie 3",      
        genres: "Horror",
        year: "2019",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('movies', addMovies, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
