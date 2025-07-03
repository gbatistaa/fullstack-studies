import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDTO } from './dto/user-dto';
import { UserService } from './user.service';

// Arquitetura modular - 4

// interface QueryPayload {
//   filter: string;
//   limit: string;
// }

@Controller('user')
export class UserController {
  // Para usar um service dentro de um controller apenas
  constructor(private userService: UserService) {}

  @Get()
  findAll(): string {
    const lista: string = this.userService.findAll();
    return lista;
  }

  @Patch(':id')
  update(@Param('id') id: string): string {
    return `<h1>meu id é ${id}</h1>`;
  }

  @Post()
  save(@Body() user: UserDTO): UserDTO {
    console.log([user.username, user.email, user.password]);
    return user;
  }
}
