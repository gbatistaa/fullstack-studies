import { User } from '../../entities/user-entity';

export const DefaultUserDto: Partial<User> = {
  username: 'default',
  firstName: 'default',
  lastName: 'default',
  email: 'default',
  password: 'default',
  active: true,
  id: 'id',
  salt: 'salt',
};
