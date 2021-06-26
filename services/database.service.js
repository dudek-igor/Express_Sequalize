const Sequelize = require('sequelize');

// Connect
const sequelize = new Sequelize('express_sequelize', 'root', '123qweasd', {
  host: 'db',
  dialect: 'mysql',
});

// Check Connection
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(() => console.error('Unable to connect to the database:'));

// Import Models
require('../models')(sequelize);

sequelize.sync({ alter: true });

module.exports = sequelize;
