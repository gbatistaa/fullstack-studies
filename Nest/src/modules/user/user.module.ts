import { Module } from '@nestjs/common';
import { User } from './user';
import { UserRepository } from './user-repository/user-repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [User, UserService, UserRepository],
  // Isso permite que eu possa usar classes desse meu módulo em outro módulo
  exports: [UserService],
})
export class UserModule {}
