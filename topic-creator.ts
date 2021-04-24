const { Kafka } = require('kafkajs');

/**
 *
 * @createTopic
 * First we need to create a topic
 */

const createTopic = async () => {
  try {
    const kafka = new Kafka({
      clientId: 'my_app',
      brokers: ['localhost:9092'],
    });

    // create an admin connection first in order to create a topic
    const admin = kafka.admin();
    await admin.connect();

    // create topic
    await admin.createTopics({
      topics: [
        {
          topic: 'user-created',
          numPartitions: 2,
        },
      ],
    });
    console.log('Topic created successfully');
    await admin.disconnect();
  } catch (err) {
    console.log('Unable to create a topic');
  } finally {
    process.exit(0);
  }
};

createTopic();
