const express = require('express');
const Sequelize = require('sequelize');

const app = express();

const PORT = process.env.PORT || 8083;

const sequelize = new Sequelize('express_sequelize', 'root', '123qweasd', {
  host: 'db',
  dialect: 'mysql',
});
sequelize
  .sync()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(() => console.error('Unable to connect to the database:'));

app.use('/', (req, res) => {
  res.json({ status: 'success' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
