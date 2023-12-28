import readline from 'readline';
import OpenAI from 'openai';

const openai = new OpenAI();

// openai.chat.completions
//   .create({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: 'Hello' }],
//   })
//   .then((res) => {
//     console.log(res.data.choices[0].message.content);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on('line', async (input) => {
  await openai.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: input }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e);
    });
});
