const express = require('express');

const app = express();

const adminRoutes = require('./routes/adminRoutes');

const userRoutes = require('./routes/userRoutes');

const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());

app.use(adminRoutes);

app.use(userRoutes);

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

module.exports = app;