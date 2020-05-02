import { Router } from 'express';
import { BookController } from './book.controller';

export class BookRouter {

    private router: Router = Router();
    private path: string = '/books';
    private readonly ctrl: BookController = new BookController();

    constructor() {
        this.createRoutes();
    }

    get routes(): Router {
        return this.router;
    }

    private createRoutes() {
        this.router
            .get(`${ this.path }/:id`, this.ctrl.findById)
            .put(`${ this.path }/:id`, this.ctrl.update)
            .delete(`${ this.path }/:id`, this.ctrl.remove)
            .get(this.path, this.ctrl.findAll)
            .post(this.path, this.ctrl.create);
    }
}
