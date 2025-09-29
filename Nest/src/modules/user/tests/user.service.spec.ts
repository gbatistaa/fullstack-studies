import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserDTO } from '../dto/user-dto';
import { User } from '../entities/user-entity';
import { UserRepository } from '../user.repository';
import { UsersService } from '../user.service';
import { DefaultUserDto } from './mocks/defaultUserDto';
import { UpdatedUserDto } from './mocks/updatedUserDto';
import { UsersMock } from './mocks/usersMock';

// Teste principal da classe UsersSerivce
describe(UsersService, () => {
  let service: UsersService;
  let repository: UserRepository;

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
    it('should create user correctly', async () => {
      // Esse teste impede que a execução real da lógica do método create seja executada
      // Isso evitar alterar o banco de dados durante da fase de testes
      const dto = new Promise<UserDTO>(() => {
        return DefaultUserDto;
      });

      jest.spyOn(repository, 'create').mockReturnValue(dto);

      const user = await service.create(DefaultUserDto);
      expect(user.username).toBe(DefaultUserDto.username);
      expect(user.id).toBeDefined();
    });

    it('should fail to create a user', () => {
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
    const dto = new Promise<UserDTO>(() => {
      return DefaultUserDto;
    });

    it('should find one user', async () => {
      jest.spyOn(repository, 'findOne').mockReturnValue(dto);

      const user: User = service.findOne((await dto).id);

      expect(user).toBe(DefaultUserDto);
      expect(user.id).toBe(DefaultUserDto.id);
    });

    it('should fail to find a user', () => {
      jest.spyOn(repository, 'findOne').mockImplementationOnce(() => {
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

      users.forEach((user, index) => {
        expect(user).toBe(UsersMock[index]);
        expect(user.id).toBe(UsersMock[index].id);
      });
    });

    it('should fail to find all users', () => {
      jest.spyOn(repository, 'findAll').mockImplementationOnce(() => {
        throw new BadRequestException();
      });

      const fn = () => service.findAll();
      expect(fn).toThrow(BadRequestException);
    });
  });

  describe(UsersService.prototype.update.name, () => {
    it('should update correctly', () => {
      jest.spyOn(repository, 'update').mockReturnValue(UpdatedUserDto);

      const updatedUser: User = service.update(DefaultUserDto.id, UpdatedUserDto);

      expect(updatedUser).toBe(UpdatedUserDto);
      expect(updatedUser.firstName).toBe(UpdatedUserDto.firstName);
      expect(updatedUser.lastName).toBe(UpdatedUserDto.lastName);
    });

    it('should fail to update', () => {
      jest.spyOn(repository, 'update').mockImplementationOnce(() => {
        throw new BadRequestException();
      });

      const fn = () => service.update(DefaultUserDto.id, UpdatedUserDto);
      expect(fn).toThrow(BadRequestException);
    });
  });

  describe(UsersService.prototype.remove.name, () => {
    it('should remove user correctly', () => {
      jest.spyOn(repository, 'remove').mockReturnValue(DefaultUserDto);

      const removedUser: User = service.remove(DefaultUserDto.id);

      expect(removedUser).toEqual(DefaultUserDto);
      expect(removedUser.id).toBe(DefaultUserDto.id);
    });

    it('should fail to remove', () => {
      jest.spyOn(repository, 'remove').mockImplementationOnce(() => {
        throw new BadRequestException();
      });

      const fn = () => service.remove(DefaultUserDto.id);
      expect(fn).toThrow(BadRequestException);
    });
  });
});
