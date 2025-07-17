import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user-entity';
import { UserRepository } from './user.repository';

// Services são os providers onde ficam a lógica de negócio do módulo
// Os controllers se comunicam com os services e os services com os repositories

@Injectable()
export class UsersService {
  public users: User[];

  constructor(private userRepository: UserRepository) {}

  /**
   * Method to convert dto to user entity
   * @param createUser dto
   * @returns User
   */

  public create(createUser: CreateUserDto): User {
    try {
      return this.userRepository.create(createUser);
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Bad request');
    }
  }

  public findAll() {
    return this.userRepository.findAll();
  }

  public findOne(id: string): User {
    return this.userRepository.findOne(id);
  }

  public update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  public remove(id: string) {
    return this.userRepository.remove(id);
  }
}
