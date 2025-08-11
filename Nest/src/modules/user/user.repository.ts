import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDTO } from './dto/user-dto';
import { User } from './entities/user-entity';

// Services são os providers onde ficam a lógica de negócio do módulo
// Os controllers se comunicam com os services e os services com os repositories

@Injectable()
export class UserRepository {
  // Essa injeção de repositório nos permite que todas os métodos de banco de dados
  // sejam operados diretamente pelo repositório da entidade User do TypeORM
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  /**
   * Method to convert dto to user entity
   * @param createUser dto
   * @returns User
   */

  public async create(createUser: CreateUserDto): Promise<UserDTO> {
    const user = this.repo.create(createUser);
    const dbUser = await this.repo.save(user);

    // Retornando o DTO do usuário com dados filtrados para não expor dados do cliente:
    return plainToInstance(UserDTO, dbUser);
  }

  public async findAll(): Promise<UserDTO[]> {
    const foundUsers = await this.repo.find();
    const foundUsersDTO: UserDTO[] = foundUsers.map((found: User) => {
      const dto = plainToInstance(UserDTO, found);
      console.log(dto);
      return dto;
    });

    // Retornando o DTO do usuário com dados filtrados para não expor dados do cliente:
    return foundUsersDTO;
  }

  public async findOne(id: string): Promise<UserDTO> {
    const user = await this.repo.findOne({ where: { id: id } });

    // Verificação de existência do usuário procurado no banco de dados
    if (!user) {
      throw new NotFoundException();
    }

    // Retornando o DTO do usuário com dados filtrados para não expor dados do cliente:
    return plainToInstance(UserDTO, user);
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDTO> {
    const user = await this.repo.findOne({ where: { id: id } });

    // Verificação de existência do usuário no banco de dados
    // Evitando mandar atualizar um valor que retorne como undefined:
    if (!user) {
      throw new NotFoundException();
    }

    const newUser = {
      ...user,
      ...updateUserDto,
    };

    // Atualizando o novo usuário no banco de dados:
    await this.repo.save(newUser);

    // Retornando para a API o dado atualizado do banco de dados:
    const updated = await this.repo.findOne({ where: { id } });
    return plainToInstance(UserDTO, updated);
  }

  public async remove(id: string): Promise<UserDTO> {
    const userToRemove = await this.repo.findOne({ where: { id: id } });
    if (!userToRemove) {
      throw new NotFoundException();
    }
    await this.repo.remove(userToRemove);
    return plainToInstance(UserDTO, userToRemove);
  }
}
