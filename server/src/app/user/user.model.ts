import * as mongoose from 'mongoose';
import { ModelEnum } from '../enums/model.enum';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
}, {
    collection: ModelEnum.USER,
    timestamps: true,
    versionKey: false
});

export const userModel = mongoose.model(ModelEnum.USER, schema);
