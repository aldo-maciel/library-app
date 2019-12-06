import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RoutesMiddleware } from './config/app.config';
import { MongoConfig } from './config/mongo.config';
import { properties } from './properties';

class App {
    public app: Application = express();

    constructor() {
        this.app = express();
        this.config();
    }

    private async config(): Promise<any> {
        this.app.use(cors());

        this.app.use(bodyParser.json({ limit: properties.system.limit }));
        this.app.use(bodyParser.urlencoded({ extended: true, limit: properties.system.limit }));
        this.app.use(express.static(process.cwd() + '/view'));

        await new MongoConfig().mongoSetup();
        new RoutesMiddleware().config(this.app);
    }
}

export default new App().app;
