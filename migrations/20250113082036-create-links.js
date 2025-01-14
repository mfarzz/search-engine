'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('links', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      id_user: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      judul: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      gambar: {
        type: Sequelize.TEXT,
      },
      deskripsi: {
        type: Sequelize.TEXT,
      },
      visibilitas: {
        type: Sequelize.ENUM('public', 'private'),
        defaultValue: 'public',
      },
      vector: {
        type: Sequelize.JSONB,
      },
      vector_metadata: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
    await queryInterface.addIndex('links', ['id_user']);
    await queryInterface.addIndex('links', ['url']);
    await queryInterface.addIndex('links', ['createdAt']);
    await queryInterface.addIndex('links', ['vector']);
    await queryInterface.addIndex('links', ['vector_metadata']);
    await queryInterface.addIndex('links', ['visibilitas']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('links');
  }
};