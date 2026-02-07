const express = require('express');

const app = express();

const adminRoutes = require('./routes/adminRoutes');

const userRoutes = require('./routes/userRoutes');

const errorMiddleware = require('./middlewares/errorMiddleware');

const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');

const userSwagger = YAML.load('./docs/swagger.user.yml');

const adminSwagger = YAML.load('./docs/swagger.admin.yml');

app.use(express.json());

app.use('/docs', swaggerUi.serveFiles(userSwagger), swaggerUi.setup(userSwagger, {explorer: true}));

app.use('/admin-docs', swaggerUi.serveFiles(adminSwagger), swaggerUi.setup(adminSwagger, {explorer: true}));

app.use(adminRoutes);

app.use(userRoutes);

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

module.exports = app;