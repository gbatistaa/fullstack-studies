import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user-entity';
import { UserRepository } from './user.repository';
import { UsersService } from './user.service';

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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn(),
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
        throw new InternalServerErrorException();
      });

      const fn = () => service.create(DefaultUserDto);
      expect(fn).toThrow(BadRequestException);
    });
  });
});
