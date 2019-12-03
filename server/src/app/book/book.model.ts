import * as mongoose from 'mongoose';
import { ModelEnum } from '../enums/model.enum';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover: Object,
    description: String
}, {
    collection: ModelEnum.BOOK,
    timestamps: true,
    versionKey: false
});

export const bookModel = mongoose.model(ModelEnum.BOOK, schema);
