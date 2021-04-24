const express = require('express');
import 'express-async-errors';
import { json } from 'body-parser';

import route from './route';
import { producerClient } from './kafka-client';

const app = express();

app.use(json());
app.use(route);

const connect = async () => {
  try {
    await producerClient.connect('my_app', ['localhost:9092']);
  } catch (error) {
    console.log('I=Unable to connect');
  }
};
connect();

app.listen(5001, () => {
  console.log('Producer started at 5001');
});

// import { Kafka, Message } from 'kafkajs';

// const kafka = new Kafka({
//   clientId: 'my_app',
//   brokers: ['localhost:9092'],
// });

// const producer = kafka.producer();

// const message: Message = {
//   value: 'Hey There',
// };

// const start = async () => {
//   await producer.connect();
//   await producer.send({
//     topic: 'test-topic',
//     messages: [message],
//   });
// };

// start();
