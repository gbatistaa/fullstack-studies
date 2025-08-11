import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './user.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./dto/user-dto").UserDTO>;
    findAll(): Promise<import("./dto/user-dto").UserDTO[]>;
    findOne(id: string): Promise<import("./dto/user-dto").UserDTO>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./dto/user-dto").UserDTO>;
    remove(id: string): Promise<import("./dto/user-dto").UserDTO>;
}
