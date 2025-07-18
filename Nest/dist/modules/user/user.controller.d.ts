import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './user.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("./entities/user-entity").User;
    findAll(): import("./entities/user-entity").User[];
    findOne(id: string): import("./entities/user-entity").User;
    update(id: string, updateUserDto: UpdateUserDto): import("./entities/user-entity").User;
    remove(id: string): import("./entities/user-entity").User;
}
