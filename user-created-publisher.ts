import { Publisher } from './publisher';
import { Topics } from './topics';

interface Event {
  topic: Topics.USER_CREATED;
  data: {
    value: string;
  };
}

export class UserCreatedPublisher extends Publisher<Event> {
  topic: Topics = Topics.USER_CREATED;
}
