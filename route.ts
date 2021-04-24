import { Router } from 'express';
import { producerClient } from './kafka-client';
import { UserCreatedPublisher } from './user-created-publisher';

const router = Router();

router.post('/create-user', async (req, res) => {
  const { email, password } = req.body;
  // send this to the other service using kafka
  console.log({ email, password });
  try {
    await new UserCreatedPublisher(producerClient.client).publish({
      value: JSON.stringify({ email, password }),
    });
    console.log('Message published');
  } catch (error) {
    console.error(error);
  }
  res.status(201).send();
});

export default router;
