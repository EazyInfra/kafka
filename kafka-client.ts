import { Kafka } from 'kafkajs';

class KafkaClient {
  private _client: Kafka;

  get client() {
    if (!this._client) {
      throw new Error('Cannot access client before initializing it');
    } else {
      return this._client;
    }
  }
  connect(clientId: string, brokers: string[]) {
    this._client = new Kafka({
      clientId,
      brokers,
    });

    return new Promise((resolve, reject) => {
      try {
        this._client.producer().connect();
        console.log('Connected with consumer');
        resolve('Connected to consumer');
      } catch (error) {
        console.log('[ERROR] Cannot connect as consumer');
        reject();
      }
    });
  }
}

export const producerClient = new KafkaClient();
