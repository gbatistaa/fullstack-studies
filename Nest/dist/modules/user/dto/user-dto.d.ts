import { UserInterface } from '../interfaces';
export declare class UserDTO implements UserInterface {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    salt: string;
    active: boolean;
    birthDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
