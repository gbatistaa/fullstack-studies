import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './modules/role/role.module';
import { UsersModule } from './modules/user/users.module';

// Aqui está a configuração do módulo da conexão com o banco de dados PostgreSQL
// Via TypeORM, também com configuração das variáveis de ambiente carregadas no arquivo principal
@Module({
  imports: [
    UsersModule,
    RoleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST ?? 'localhost',
      port: parseInt(process.env.PORT ?? '5432', 10),
      username: process.env.USERNAME ?? 'postgres',
      password: String(process.env.PASSWORD ?? ''),
      database: process.env.DATABASE ?? 'fullstack_studies',
      migrations: [__dirname + '/../migrations/*.{js,ts}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
