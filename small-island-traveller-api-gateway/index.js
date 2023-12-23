// index.js
import express from 'express';
import translateRouter from './src/routes/translate.js';

const app = express();
const port = 3000;

app.use('/api/translate', translateRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
