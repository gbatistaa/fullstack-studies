import { User } from '../../entities/user-entity';

// A classe Parcial permite que alguns campos obrigatórios
// de objetos tipados sejam omitidos, sendo uma boa alternativa
// para mocks de teste
export const UsersMock: Partial<User>[] = [
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
    username: 'samara.oliveir',
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
