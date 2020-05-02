import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRouter {

    private router: Router = Router();
    private path: string = '/users';
    private readonly ctrl: UserController = new UserController();

    constructor() {
        this.createRoutes();
    }

    get routes(): Router {
        return this.router;
    }

    private createRoutes() {
        this.router
            .post(this.path, this.ctrl.create)
            .get(this.path, this.ctrl.login);
    }
}
