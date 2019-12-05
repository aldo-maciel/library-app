import { bookEvaluationModel } from './book-evaluation.model';

export class BookEvaluationService {

    async evaluate(book: string, rating: number) {
        await bookEvaluationModel.create({
            rating,
            userId: book,
            bookId: book
        });
    }

    findByBookId(bookId: string, userId: string) {
        return bookEvaluationModel.findOne({ bookId, userId }, null, { lean: true });
    }

    async findOneAndUpdate(bookId: string, userId: string, rating: number) {
        await bookEvaluationModel.findOneAndUpdate({ bookId, userId }, { rating });
    }

}
