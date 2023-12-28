import { MongoClient } from 'mongodb';
// Connection URI for MongoDB (replace with your actual connection string)
const uri = 'mongodb://localhost:27017/your-database-name';

let client;

export const createMongoClient = () => {
  if (!clients) {
    try {
      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {}
  }
  return client;
};

export const getMongoClient = () => {
  if (!client) {
    logger.warn('cache client has not been initialized yet');
    return {};
  }
  return client;
};
