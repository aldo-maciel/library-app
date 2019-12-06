import { BookRouter } from '../app/book/book.router';
import { Application } from 'express';
import { BookEvaluationRouter } from '../app/book/book-evaluation/book-evaluation.router';
import { UserRouter } from '../app/user/user.router';

export class RoutesMiddleware {
    public booksRouter = new BookRouter();
    public userRouter = new UserRouter();
    public booksEvaluationRouter = new BookEvaluationRouter();

    public config(app: Application): void {
        const baseUrl = '/api';
        app.use(baseUrl, this.booksRouter.routes);
        app.use(baseUrl, this.userRouter.routes);
        app.use(baseUrl, this.booksEvaluationRouter.routes);
    }
}
