// É necessário que as variáveis de ambiente sejam carregadas antes da
// importação do módulo, pois elas podem vir com valores undefined:
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './modules/common/docs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Documentação por meio da classe SwaggerModule do NestJS:
  swagger(app, 'development');
  await app.listen(3000);
}

void bootstrap();
