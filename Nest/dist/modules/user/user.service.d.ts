import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDTO } from './dto/user-dto';
import { User } from './entities/user-entity';
import { UserRepository } from './user.repository';
export declare class UsersService {
    private userRepository;
    users: User[];
    constructor(userRepository: UserRepository);
    create(createUser: CreateUserDto): Promise<UserDTO>;
    findAll(): Promise<UserDTO[]>;
    findOne(id: string): Promise<UserDTO>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserDTO>;
    remove(id: string): Promise<UserDTO>;
}
