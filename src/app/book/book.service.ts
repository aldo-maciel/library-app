import { bookModel } from './book.model';
import logger from '../../shared/logger.service';
import { Book } from './book';
import { BookEvaluationService } from './book-evaluation/book-evaluation.service';
import { userService } from '../user/user.service';
import { BookEvaluation } from './book-evaluation/book-evaluation';

export class BookService {
    private evaluationService: BookEvaluationService = new BookEvaluationService();

    /**
     * Get all records on database
     */
    public async findAll(pagination: any) {
        logger.debug(pagination);
        const user = userService.getUser();
        const { text = '' } = JSON.parse(pagination.filter || '{}');
        const filter = { name: { $regex: text, $options: 'i' } };
        const data = await bookModel
            .find(filter)
            .skip(parseInt(pagination.start))
            .limit(parseInt(pagination.step) || 10)
            .sort(pagination.sort || { createdAt: -1 })
            .lean(true);

        const count = await bookModel.countDocuments(filter);

        for (const book of data) {
            book.evaluation = await this.evaluationService.findByBookId(book._id, user._id);
            if (user.admin) {
                book.evaluations = await this.evaluationService.findByBookIdAsAdmin(book._id);
                book.evaluations.forEach((evaluation: BookEvaluation) => {
                    if (!evaluation.user) {
                        evaluation.user = {};
                    }
                });
            }
        }
        return { count, data };
    }

    /**
     * Find on by id
     */
    public findById(_id: string) {
        logger.debug(_id);
        return bookModel.findOne({ _id }).lean(true);
    }

    /**
     * Update data by id on the database
     */
    public async update(id: string, record: Book) {
        await bookModel.findOneAndUpdate({ _id: id }, record);
    }

    /**
     * Create new data on the database
     */
    public async create(obj: Book) {
        if (!obj.name) {
            throw new Error('Nome do livro é obrigatório');
        }
        const rec: Book = {
            name: obj.name,
            author: obj.author,
            description: obj.description,
            cover: obj.cover || {}
        };
        await bookModel.create(rec);
    }

    /**
     * Delete a record by id on the database
     */
    public async remove(_id: string) {
        await bookModel.findOneAndDelete({ _id });
    }
}
