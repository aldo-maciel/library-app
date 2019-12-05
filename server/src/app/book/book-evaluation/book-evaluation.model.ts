import * as mongoose from 'mongoose';
import { Types } from 'mongoose';
import { ModelEnum } from '../../enums/model.enum';

const Schema = mongoose.Schema;

const schema = new Schema({
    rating: Number,
    userId: Types.ObjectId,
    bookId: Types.ObjectId
}, {
    collection: ModelEnum.BOOK_EVALUATION,
    timestamps: true,
    versionKey: false
});

schema.virtual('book', {
    ref: ModelEnum.BOOK,
    localField: 'bookId',
    foreignField: '_id',
    justOne: true
});

schema.virtual('user', {
    ref: ModelEnum.BOOK,
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});

export const bookEvaluationModel = mongoose.model(ModelEnum.BOOK_EVALUATION, schema);
