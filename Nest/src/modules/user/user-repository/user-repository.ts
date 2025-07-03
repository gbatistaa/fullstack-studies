import { Injectable } from '@nestjs/common';

// O repository é na aplicação a entidade que vai se comunicar com o banco de dados
@Injectable()
export class UserRepository {
  findAll(): string {
    return '<h3>My user from db</h3>';
  }
}
