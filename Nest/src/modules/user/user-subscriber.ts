import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { CryptUtils } from '../common/utils/crypt-utils';
import { User } from './entities/user-entity';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    const user: User = event.entity;

    user.salt = await CryptUtils.generateSalt();
    user.password = await CryptUtils.generatePasswordHash(user.password, user.salt);
  }
}
