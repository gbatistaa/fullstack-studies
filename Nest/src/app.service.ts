import { Injectable } from '@nestjs/common';
import { User } from './modules/user/entities/user-entity';
import { UsersService } from './modules/user/user.service';

@Injectable()
export class AppService {
  private userService: UsersService;

  getHello(): User[] {
    return this.userService.findAll();
  }
}
