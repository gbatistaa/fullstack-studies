import { Role } from 'src/modules/role/entities/role-entity';
import { UserDTO } from '../../dto/user-dto';

export const DefaultUserDto: UserDTO = {
  username: 'default',
  firstName: 'default',
  lastName: 'default',
  email: 'default',
  password: 'default',
  active: true,
  id: 'id',
  salt: 'salt',
  birthDate: new Date(),
  roles: [new Role()],
  createdAt: new Date(),
  updatedAt: new Date(),
};
