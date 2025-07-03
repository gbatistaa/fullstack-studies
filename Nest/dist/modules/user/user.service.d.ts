import { UserRepository } from './user-repository/user-repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    findAll(): string;
}
