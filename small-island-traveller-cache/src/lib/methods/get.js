const getItem = (client, key) => {
  try {
    client.get(key, (error, data) => {
      if (error) {
        console.error(error);
        return {
          error,
        };
      } else {
        return { data };
      }
    });
  } catch (error) {
    console.log(`redis set item error:`, error);
  }
};

export default getItem;
