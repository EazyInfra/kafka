import { Kafka, Message } from 'kafkajs';
import { config } from './config';

const kafka = new Kafka(config);

const producer = kafka.producer();

const message: Message = {
  value: JSON.stringify({
    name: 'Karan Kumar',
  }),
};

const sendMessage = async () => {
  await producer.send({
    topic: config.kafka_topic,
    messages: [message],
  });
};

sendMessage();
