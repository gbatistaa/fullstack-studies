import { UserDTO } from './dto/user-dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): string;
    update(id: string): string;
    save(user: UserDTO): UserDTO;
}
