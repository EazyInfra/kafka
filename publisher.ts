import { Kafka, Message } from 'kafkajs';
import { Topics } from './topics';

interface Event {
  topic: Topics;
  data: Message;
}

export abstract class Publisher<T extends Event> {
  private client: Kafka;
  abstract topic: Topics;
  constructor(client: Kafka) {
    this.client = client;
  }

  async publish(data: T['data']): Promise<void> {
    const producer = this.client.producer();
    await producer.connect();
    await producer.send({
      topic: this.topic,
      messages: [data],
    });
  }
}
