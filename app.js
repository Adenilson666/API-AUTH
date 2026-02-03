const express = require('express');

const app = express();

const router = require('./routes/userRouter');

app.use(express.json());

app.use(router);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

module.exports = app;