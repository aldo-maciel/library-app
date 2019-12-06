import { Request, Response } from 'express';
import { BookEvaluationService } from './book-evaluation.service';
import { userService } from '../../user/user.service';

export class BookEvaluationController {
    private static service: BookEvaluationService = new BookEvaluationService();

    async evaluate(req: Request, res: Response) {
        const service = BookEvaluationController.service;
        const { bookId } = req.params;
        const { rating } = req.body;
        const userId = userService.getUser()._id;
        const contains = await service.findByBookId(bookId, userId);
        if (contains) {
            await service.findOneAndUpdate(bookId, userId, rating);
        } else {
            await service.evaluate(bookId, userId, rating);
        }
        res.json({ success: true });
    }

}
