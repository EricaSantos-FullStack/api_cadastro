'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      nome: 'Roberto',
      sobrenome: 'Cavalcante',
      data_nascimento: '1998/05/22',
      email: 'roberto@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
