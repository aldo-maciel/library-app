import mongoose from 'mongoose';
import logger from '../shared/logger.service';
import { properties } from '../properties';

export class MongoConfig {
    private mongo = properties.mongo;
    private mongoUrl: string = `mongodb://${ this.mongo.host }:${ this.mongo.port }/${ this.mongo.base }`;

    public async mongoSetup() {
        try {

            const connect = () => {
                mongoose
                    .connect(this.mongoUrl, {
                        useNewUrlParser: true,
                        useFindAndModify: false,
                        useUnifiedTopology: true
                    })
                    .then(() => {
                        logger.debug('Connected on mongo:', this.mongoUrl);
                    })
                    .catch((err) => {
                        logger.error('Error connecting to database:', err);
                        return process.exit(1);
                    });
            };

            connect();

            mongoose.connection.on('disconnected', connect);
        } catch (error) {
            logger.error(error);
        }
    }
}
