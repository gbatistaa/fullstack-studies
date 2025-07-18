import { mock } from 'node:test';
import { UserRepository } from './user.repository';
import { UsersService } from './user.service';

describe(UserRepository, () => {
  let service: UsersService;
  let repository: UserRepository;

  beforeAll(() => {
    mock<UserRepository>;
  });

  describe(UserRepository.prototype.create.name, () => {
    it('should be success', () => {});

    it('should fail', () => {});
  });
});
