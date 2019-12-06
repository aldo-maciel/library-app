import { bookEvaluationModel } from './book-evaluation.model';

export class BookEvaluationService {

    async evaluate(bookId: string, userId: string, rating: number) {
        await bookEvaluationModel.create({ rating, userId, bookId });
    }

    findByBookId(bookId: string, userId: string) {
        return bookEvaluationModel.findOne({ bookId, userId }, null, { lean: true });
    }

    findByBookIdAsAdmin(bookId: string) {
        return bookEvaluationModel
            .find({ bookId }, null, { lean: true })
            .populate('user');
    }

    async findOneAndUpdate(bookId: string, userId: string, rating: number) {
        await bookEvaluationModel.findOneAndUpdate({ bookId, userId }, { rating });
    }

}
