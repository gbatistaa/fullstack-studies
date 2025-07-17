import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user-entity';
import { UserRepository } from './user.repository';
export declare class UsersService {
    private userRepository;
    users: User[];
    constructor(userRepository: UserRepository);
    create(createUser: CreateUserDto): User;
    findAll(): User[];
    findOne(id: string): User;
    update(id: string, updateUserDto: UpdateUserDto): User;
    remove(id: string): void;
}
