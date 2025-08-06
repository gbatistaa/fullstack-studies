import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from '../interfaces';

@Entity()
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  active: boolean;
}
