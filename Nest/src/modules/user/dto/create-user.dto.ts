import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserCreatableInterface } from '../interfaces';

// Podemos adicionar Pipes de validação para não permitir que algum dado
// seja adicionado pela aplicação não condiza com o tipo esperado
// de alguma propriedade de classe:
export class CreateUserDto implements UserCreatableInterface {
  @ApiProperty({
    type: 'string',
    description: 'Username to access application',
  })
  @IsString()
  username: string;

  @ApiProperty({
    type: 'string',
    description: 'Password to access application',
  })
  @IsString()
  password: string;

  @ApiProperty({
    type: 'string',
    description: 'First name of the user',
  })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({
    type: 'string',
    description: 'Last name of the user',
  })
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({
    type: 'string',
    description: 'Email account of the user',
  })
  @IsString()
  @IsEmail()
  email: string;
}
