import { AppService } from './app.service';
import { UserDTO } from './modules/user/dto/user-dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<UserDTO[]>;
}
