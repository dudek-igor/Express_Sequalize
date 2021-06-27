const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../services');

// Create users_backoffice Table
const usersBackoffice = sequelize.define(
  'users_backoffice',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
    },
    rollNo: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM('1', '0'),
      defaultValue: '1',
    },
  },
  {
    // Other model options go here
    // modelName: 'users_backoffice',
    freezeTableName: true,
  }
);

// Synchronize table
// usersBackoffice.sync({ alter: true });

module.exports = usersBackoffice;
