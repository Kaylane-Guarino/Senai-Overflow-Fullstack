'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [{
        nome: 'John Doe',
        email: 'Jonhdoe@outlook.com',
        password: '1234566',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null);
  }
};
