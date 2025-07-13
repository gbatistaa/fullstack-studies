import { Module } from '@nestjs/common';
import { User } from './entities/user-entity';
import { UserRepository } from './user-repository/user-repository';
import { UserController } from './user.controller';
import { UsersService } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [User, UsersService, UserRepository],
  // Isso permite que eu possa usar classes desse meu módulo em outro módulo
  exports: [UsersService],
})
export class UserModule {}
