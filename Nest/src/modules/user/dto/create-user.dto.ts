import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserCreatableInterface } from '../interfaces';

// Podemos adicionar Pipes de validação para não permitir que algum dado
// seja adicionado pela aplicação não condiza com o tipo esperado
// de alguma propriedade de classe:
export class CreateUserDto implements UserCreatableInterface {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;
}
