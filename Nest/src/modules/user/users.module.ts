import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user-entity';
import { UsersSubscriber } from './user-subscriber';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UsersService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService, UserRepository, UsersSubscriber],

  // Isso permite que eu possa usar classes desse meu módulo em outro módulo:
  exports: [UsersService, UserRepository, TypeOrmModule],
})
export class UsersModule {}
