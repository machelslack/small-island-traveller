const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Hello world
 *     description: Returns a greeting message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/plain:
 *             example: 'Hello World!'
 */
router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
