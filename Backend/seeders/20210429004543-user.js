'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     
     await queryInterface.bulkInsert('Users', [{
      firstName: 'Annie',
      lastName: 'Easley',
      email: 'ajeasley@nasa.gov',
      password:'hello' ,
      gender:'girl' ,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        firstName: 'Annie',
        lastName: 'Easley',
        email: 'ajeasley@nasa.gov',
        password:'hello' ,
        gender:'girl' ,
        createdAt: new Date(),
        updatedAt: new Date()
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
