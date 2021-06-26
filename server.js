const express = require('express');
const { sequelize } = require('./services');

const app = express();
const PORT = process.env.PORT || 8083;

// HomePage
app.use('/', (req, res) => {
  res.json({ status: 'success' });
});

// Mount Http Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
