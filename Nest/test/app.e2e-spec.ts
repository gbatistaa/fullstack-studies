/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { describe } from 'node:test';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

void describe('AppController (e2e)', () => {
  let app: INestApplication;

  const DefaultUser: CreateUserDto = {
    username: 'gbatistaa',
    password: 'jujubAOI312.',
    firstName: 'Gabriel',
    lastName: 'Batista',
    email: 'gbatistadev@gmail.com',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /user', async () => {
    const appGetHttpServer: App = app.getHttpServer() as App;

    await request(appGetHttpServer).post('/user').send(DefaultUser).expect(201);
    return request(appGetHttpServer)
      .get('/user')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(1);
      });
  });
});
