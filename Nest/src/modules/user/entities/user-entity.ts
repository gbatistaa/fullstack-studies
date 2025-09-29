import { CommonEntity } from 'src/modules/common/entitites/common-entity';
import { Role } from 'src/modules/role/entities/role-entity';
import { Column, Entity, JoinTable, ManyToMany, Unique } from 'typeorm';
import { UserInterface } from '../interfaces';

// Nesse modelo não é necessário colocar a coluna de id, e createdAt ou updatedAt
// pois criamos uma classe comum que implementa essas colunas com a herança

@Entity({ schema: 'nestjs' })
@Unique(['username'])
@Unique(['email'])
@Unique(['roles'])
export class User extends CommonEntity implements UserInterface {
  @Column({ type: 'citext', nullable: false })
  username: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'text', nullable: true, default: null })
  salt: string;

  @Column({ type: 'text', nullable: true })
  firstName: string;

  @Column({ type: 'citext', nullable: true })
  lastName: string;

  @Column({ type: 'citext', nullable: false })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  birthDate: Date;

  @Column({ default: true, nullable: false })
  active: boolean;

  @ManyToMany(() => Role, (role) => role.users, { cascade: true })
  @JoinTable()
  roles: Role[];
}
