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
