import { Injectable } from '@nestjs/common';
import { UserRepository } from './user-repository/user-repository';

// Services são os providers onde ficam a lógica de negócio do módulo
// Os controllers se comunicam com os services e os services com os repositories

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  findAll(): string {
    return this.userRepository.findAll();
  }
}
