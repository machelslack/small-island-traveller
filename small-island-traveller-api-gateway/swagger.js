// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
  },
  apis: ['app.js', './src/router.js'], // Add your main application file and other files with JSDoc comments here
};

const specs = swaggerJsdoc(options);

module.exports = specs;
