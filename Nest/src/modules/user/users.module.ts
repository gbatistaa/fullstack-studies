import { Module } from '@nestjs/common';
import { User } from './entities/user-entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UsersService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [User, UsersService, UserRepository],
  // Isso permite que eu possa usar classes desse meu módulo em outro módulo
  exports: [UsersService],
})
export class UsersModule {}
