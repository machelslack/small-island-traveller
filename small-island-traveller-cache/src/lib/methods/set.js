export const addItem = (client, key, value) => {
  try {
    client.set('sampleKey', 'Hello, Redis!', (err, reply) => {
      if (error) {
        console.error(error);
        return {
          error,
        };
      } else {
        return {
          reply,
        };
      }
    });
  } catch (error) {
    console.log(`redis set item error:`, error);
  }
};
