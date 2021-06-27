const express = require('express');
const appRouter = require('./routes');
const PORT = process.env.PORT || 8083;
const app = express();
// Body Parser
app.use(express.json());
// Routers
app.use('/', appRouter);

// Mount Http Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
