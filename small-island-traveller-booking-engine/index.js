import express from 'express';
import itineraryRouter from './src/routes/itinerary';

const app = express();
const port = 3000;

app.use('/api/itinerary', itineraryRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
