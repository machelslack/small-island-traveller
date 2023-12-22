// app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');
const basicRouter = require('./src/router');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', basicRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
