import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user-entity';
export declare class UsersService {
    users: User[];
    private userRepository;
    create(createUser: CreateUserDto): User;
    findAll(): User[];
    findOne(id: string): User;
    update(id: string, updateUserDto: UpdateUserDto): User;
    remove(id: string): void;
}
