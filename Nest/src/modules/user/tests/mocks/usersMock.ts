import { User } from '../../entities/user-entity';

export const UsersMock: User[] = [
  {
    username: 'gabriel.barbosa',
    firstName: 'Gabriel',
    lastName: 'Batista Barbosa',
    email: 'gabriel.barbosa@example.com',
    password: 'password123',
    active: true,
    id: '1',
    salt: 'salt1',
  },
  {
    username: 'samara.oliveira',
    firstName: 'Samara Emanuelle',
    lastName: 'Xavier de Oliveira',
    email: 'samara.oliveira@example.com',
    password: 'password456',
    active: true,
    id: '2',
    salt: 'salt2',
  },
  {
    username: 'roberta.bezerra',
    firstName: 'Roberta',
    lastName: 'Peterle Bezerra',
    email: 'roberta.bezerra@example.com',
    password: 'password789',
    active: false,
    id: '3',
    salt: 'salt3',
  },
];
