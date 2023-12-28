import redis from 'redis';

let redisClient = null;

export const createCache = () => {
  if (!redisClient) {
    try {
      redisClient = await redis.createClient({
        host: 'localhost', // Default Redis host, update this when hosting in cloud
        port: 6379, // Default Redis port
      });

      redisClient.on('connect', () => {
        console.log('Connected to Redis');
      });
    } catch (error) {}
  }
  return redisClient;
};

export const getCache = () => {
  if (!redisClient) {
    logger.warn('cache client has not been initialized yet');
    return {};
  }
  return redisClient;
};

export function smallIslandTravellerCache(): string {
  return 'small-island-traveller-cache';
}
