"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const role_module_1 = require("./modules/role/role.module");
const users_module_1 = require("./modules/user/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            role_module_1.RoleModule,
            typeorm_1.TypeOrmModule.forRoot({
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
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map