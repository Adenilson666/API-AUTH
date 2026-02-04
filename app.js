const express = require('express');

const app = express();

const router = require('./routes/rotas');

const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

module.exports = app;