import { Injectable } from '@nestjs/common';
import { UserService } from './modules/user/user.repository';

@Injectable()
export class AppService {
  private userService: UserService;

  getHello(): string {
    return this.userService.findAll();
  }
}
