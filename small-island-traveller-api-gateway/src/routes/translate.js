import express from 'express';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.post('/', (req, res) => {
  res.json({
    message: 'Hello, Express!',
  });
});

export default router;
