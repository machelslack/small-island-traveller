export const insertRecord = (client) => {
  try {
    client.connect((error) => {
      if (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error(error);
      }

      // Connected successfully
      console.log('Connected to MongoDB');

      const db = client.db();

      // Insert a document into a collection
      const collection = db.collection('your-collection-name');
      const document = { name: 'John Doe', age: 30 };

      collection.insertOne(document, (insertErr, result) => {
        if (insertErr) {
          console.error('Error inserting document:', insertErr);
          throw new Error('Error inserting document:', insertErr);
        } else {
          console.log('Document inserted successfully:', result.ops);
          return {
            result,
          };
        }

        // Close the connection when done
        client.close();
      });
    });
  } catch (error) {
    return {
      error,
    };
  }
};
