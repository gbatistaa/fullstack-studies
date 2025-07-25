import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user-entity';

// Services são os providers onde ficam a lógica de negócio do módulo
// Os controllers se comunicam com os services e os services com os repositories

@Injectable()
export class UserRepository {
  public users: User[];
  constructor() {
    this.users = [];
  }

  /**
   * Method to convert dto to user entity
   * @param createUser dto
   * @returns User
   */
  private convertToUser(createUser: CreateUserDto): User {
    const user = new User();

    user.username = createUser.username;
    user.password = createUser.password;
    user.firstName = createUser.firstName;
    user.lastName = createUser.lastName;
    user.email = createUser.email;
    user.active = true;

    return user;
  }

  public create(createUser: CreateUserDto): User {
    const user = this.convertToUser(createUser);
    user.id = randomUUID();
    this.users.push(user);
    return user;
  }

  public findAll(): User[] {
    return this.users;
  }

  public findOne(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException();
    return user;
  }

  public update(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);
    if (updateUserDto.firstName) user.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;
    return user;
  }

  public remove(id: string): User {
    const index = this.users.findIndex((prop) => prop.id === id);
    if (index < 0) throw new NotFoundException();
    return this.users.splice(index, 1)[0];
  }
}
