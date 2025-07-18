import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../entities/user-entity';
import { UserRepository } from '../user.repository';
import { UsersService } from '../user.service';

// Teste principal da classe UsersSerivce
describe(UsersService, () => {
  let service: UsersService;
  let repository: UserRepository;

  const DefaultUserDto: User = {
    username: 'default',
    firstName: 'default',
    lastName: 'default',
    email: 'default',
    password: 'default',
    active: true,
    id: 'id',
    salt: 'salt',
  };

  const UsersMock: User[] = [
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe(UsersService.prototype.create.name, () => {
    it('should create user correctly', () => {
      // Esse teste impede que a execução real da lógica do método create seja executada
      // Isso evitar alterar o banco de dados durante da fase de testes
      jest.spyOn(repository, 'create').mockReturnValue(DefaultUserDto);

      const user = service.create(DefaultUserDto);
      expect(user.username).toBe(DefaultUserDto.username);
      expect(user.id).toBeDefined();
    });

    it('should fail', () => {
      // Nesse mock ele executa a função da classe do service, porém força com que
      // ela lance um erro de BadRequestException, para testar o tratamento do erro
      jest.spyOn(repository, 'create').mockImplementationOnce(() => {
        throw new BadRequestException();
      });

      const fn = () => service.create(DefaultUserDto);
      expect(fn).toThrow(BadRequestException);
    });
  });

  describe(UsersService.prototype.findOne.name, () => {
    it('should find one user', () => {
      jest.spyOn(repository, 'findOne').mockReturnValue(DefaultUserDto);

      const user: User = service.findOne(DefaultUserDto.id);

      expect(user).toBe(DefaultUserDto);
      expect(user.id).toBe(DefaultUserDto.id);
    });

    it('should fail', () => {
      jest.spyOn(service, 'findOne').mockImplementationOnce(() => {
        throw new BadRequestException();
      });

      const fn = () => service.findOne(DefaultUserDto.id);
      expect(fn).toThrow(BadRequestException);
    });
  });

  describe(UsersService.prototype.findAll.name, () => {
    it('should return users list', () => {
      jest.spyOn(repository, 'findAll').mockReturnValue(UsersMock);

      const users: User[] = service.findAll();

      console.log(users);

      users.forEach((user, index) => {
        expect(user).toBe(UsersMock[index]);
        expect(user.id).toBe(UsersMock[index].id);
      });
    });
  });
});
