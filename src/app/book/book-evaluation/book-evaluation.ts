import { Types } from 'mongoose';

export interface BookEvaluation {
    userId: Types.ObjectId;
    rating: number;
    bookId: Types.ObjectId;
    user: {}
}
