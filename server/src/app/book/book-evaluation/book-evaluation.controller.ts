import { Request, Response } from 'express';
import { BookEvaluationService } from './book-evaluation.service';

export class BookEvaluationController {
    private static service: BookEvaluationService = new BookEvaluationService();

    async evaluate(req: Request, res: Response) {
        const service = BookEvaluationController.service;
        const { bookId } = req.params;
        const { rating } = req.body;
        const contains = await service.findByBookId(bookId, bookId);
        if (contains) {
            await service.findOneAndUpdate(bookId, bookId, rating);
        } else {
            await service.evaluate(bookId, rating);
        }
        res.json({ success: true });
    }

}
