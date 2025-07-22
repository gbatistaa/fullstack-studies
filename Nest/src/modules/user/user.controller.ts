import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IsUuidDecorator } from '../common/decorators/is-uuidparam/is-uuidparam';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@IsUuidDecorator('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@IsUuidDecorator('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
