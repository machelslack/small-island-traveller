import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.post('/', async (request, response) => {
  const { chats } = request.body;

  res.json({
    message: 'Hello, Express! this is a chat',
  });

  const openai = new OpenAI();

  const result = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a EbereGPT. You can help with graphic design tasks',
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

export default router;
