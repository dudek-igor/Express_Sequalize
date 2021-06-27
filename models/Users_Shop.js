const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services');

// Create users_shop Table
class User extends Model {}
const usersShop = User.init(
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
      comment: 'Column include a users names',
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: 'users_shop',
    freezeTableName: true,
  }
);

// Put Some Data to Table

// Synchronize table
// usersShop.sync({ alter: true });

module.exports = usersShop;
