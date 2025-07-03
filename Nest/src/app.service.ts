import { Injectable } from '@nestjs/common';
import { UserService } from './modules/user/user.service';

@Injectable()
export class AppService {
  private userService: UserService;

  getHello(): string {
    return this.userService.findAll();
  }
}
