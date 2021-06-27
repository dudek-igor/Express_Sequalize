const { Router } = require('express');
const appRouter = Router();
const { usersShop } = require('./models');

// Bulk Users
appRouter.post('/bulk-users', async (req, res) => {
  await usersShop.bulkCreate([
    { name: 'Igor', email: 'igor@dudek.com' },
    { name: 'Klaudia', email: 'klaudia@subik.com' },
  ]);
  res.send({ status: 1, message: 'Users has been created' });
});
// Get
appRouter.get('/users', async (req, res) => {
  const users = await usersShop.findAll({
    attributes: { exclude: ['id'] },
  });
  res.send(users);
});
// Create
appRouter.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await usersShop.create({
    name,
    email,
  });
  console.log(user.toJSON());
  res.send({ status: 1, message: 'User has been created' });
});
// Update
appRouter.put('/users', async (req, res) => {
  const { uuid, name } = req.body;
  const user = await usersShop.update({ name }, { where: { uuid } });
  console.log(user);
  res.send({ status: 1, message: 'User has been updated' });
});
// Delete
appRouter.delete('/users', async (req, res) => {
  const { uuid } = req.body;
  await usersShop.destroy({ where: { uuid } });
  res.send({ status: 1, message: 'User has been deleted' });
});
// Truncate Table
appRouter.delete('/truncate-users', async (req, res) => {
  await usersShop.destroy({ truncate: true });
  res.send({ status: 1, message: 'Table has been truncated' });
});

// HomePage
appRouter.get('/', (req, res) => {
  res.json({ status: 'success' });
});

module.exports = appRouter;
