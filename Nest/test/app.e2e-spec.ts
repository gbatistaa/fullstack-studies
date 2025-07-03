import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { describe } from 'node:test';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

void describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const appGetHttpServer: App = app.getHttpServer() as App;
    return request(appGetHttpServer).get('/').expect(200).expect('Hello World!');
  });
});
