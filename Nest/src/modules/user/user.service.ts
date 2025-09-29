/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDTO } from './dto/user-dto';
import { UserRepository } from './user.repository';

// Services são os providers onde ficam a lógica de negócio do módulo
// Os controllers se comunicam com os services e os services com os repositories

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  /**
   * Method to convert dto to user entity
   * @param createUser dto
   * @returns User
   */

  public create(createUser: CreateUserDto): Promise<UserDTO> {
    try {
      return this.userRepository.create(createUser);
    } catch (error) {
      throw new BadRequestException('Bad request');
    }
  }

  public findAll(): Promise<UserDTO[]> {
    try {
      return this.userRepository.findAll();
    } catch (error) {
      throw new BadRequestException('Bad request');
    }
  }

  public findOne(id: string): Promise<UserDTO> {
    try {
      return this.userRepository.findOne(id);
    } catch (error) {
      throw new BadRequestException('Bad request');
    }
  }

  public update(id: string, updateUserDto: UpdateUserDto): Promise<UserDTO> {
    try {
      return this.userRepository.update(id, updateUserDto);
    } catch (error) {
      throw new BadRequestException('Bad request');
    }
  }

  public remove(id: string): Promise<UserDTO> {
    try {
      return this.userRepository.remove(id);
    } catch (error) {
      throw new BadRequestException('Bad request');
    }
  }
}
