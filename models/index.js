// Import All Models
const User = require('./User');

// Exports Models
module.exports = (sequelize) => {
  User(sequelize);
};
