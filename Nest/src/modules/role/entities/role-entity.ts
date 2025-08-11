import { CommonEntity } from 'src/modules/common/entitites/common-entity';
import { User } from 'src/modules/user/entities/user-entity';
import { Column, Entity, ManyToMany, Unique } from 'typeorm';
import { RoleInterface } from '../interfaces/role.interface';

@Entity({ schema: 'nestjs' })
@Unique(['name'])
export class Role extends CommonEntity implements RoleInterface {
  @Column({ type: 'text', nullable: false })
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
