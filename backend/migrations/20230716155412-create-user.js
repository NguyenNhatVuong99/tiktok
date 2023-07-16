'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      tick: {
        type: Sequelize.BOOLEAN
      },
      followingsCount: {
        type: Sequelize.INTEGER
      },
      followersCount: {
        type: Sequelize.INTEGER
      },
      likesCount: {
        type: Sequelize.INTEGER
      },
      facebookUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};