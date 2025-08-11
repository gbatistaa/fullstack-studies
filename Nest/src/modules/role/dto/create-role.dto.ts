import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class CreateRoleDto {
  @ApiProperty({
    type: 'string',
    description: 'name of the role',
  })
  @IsString()
  @Expose()
  name: string;
}
