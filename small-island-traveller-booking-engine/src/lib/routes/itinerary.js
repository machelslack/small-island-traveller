import express from 'express';
import itineraryHander from '../handlers/itinerary';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.post('/', itineraryHander);

export default router;
