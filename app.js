const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

module.exports = app;