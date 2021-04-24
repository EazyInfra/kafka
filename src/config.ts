export const config = {
  clientId: 'my-app',
  kafka_topic: 'user-created',
  brokers: ['localhost:9092'],
  connectionTimeout: 3000,
  authenticationTimeout: 1000,
  reauthenticationThreshold: 10000,
};
