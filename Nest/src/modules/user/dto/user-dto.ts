import { Exclude, Expose } from 'class-transformer';
import { Role } from 'src/modules/role/entities/role-entity';
import { UserInterface } from '../interfaces';

@Exclude()
export class UserDTO implements UserInterface {
  // O class decorator Expose() serve para dar permissão de quais informações
  // que serão mandadas para o front-end tendo controle em situações de
  // informações sensíveis
  @Expose()
  id: string;

  firstName: string;
  lastName: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  password: string;
  salt: string;
  active: boolean;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
  roles: Role;
}
