import { Injectable } from '@nestjs/common';
import { UserDTO } from './modules/user/dto/user-dto';
import { UsersService } from './modules/user/user.service';

@Injectable()
export class AppService {
  private userService: UsersService;

  async getHello(): Promise<UserDTO[]> {
    return await this.userService.findAll();
  }
}
