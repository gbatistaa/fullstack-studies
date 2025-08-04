import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function swagger(app: INestApplication, enviroment: string) {
  if (enviroment !== 'development') {
    return;
  }

  // Document options:
  const docOptions = new DocumentBuilder().setTitle('my first API').setVersion('1.0').addBearerAuth().build();

  // Create document:
  const document = SwaggerModule.createDocument(app, docOptions);

  // Set up docs route
  SwaggerModule.setup('api', app, document);
}
