import { Router } from 'express';
import { BookEvaluationController } from './book-evaluation.controller';

export class BookEvaluationRouter {

    private router: Router = Router();
    private path: string = '/books-evaluation';
    private readonly ctrl: BookEvaluationController = new BookEvaluationController();

    constructor() {
        this.createRoutes();
    }

    get routes(): Router {
        return this.router;
    }

    private createRoutes() {
        this.router
            .post(`${ this.path }/:bookId`, this.ctrl.evaluate);
    }
}
