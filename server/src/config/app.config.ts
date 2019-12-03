import { BookRouter } from '../app/book/book.router';
import { Application } from 'express';

export class RoutesMiddleware {
    public codesRouter = new BookRouter();

    public config(app: Application): void {
        const baseUrl = '/api';
        app.use(baseUrl, this.codesRouter.routes);
    }
}
