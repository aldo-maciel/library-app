import { Request, Response } from 'express';
import { BookService } from './book.service';
import handleError from '../../shared/error.service';

export class BookController {
    private static service: BookService = new BookService();

    /**
     * Get all records on database
     *
     * @param req
     * @param res
     */
    public async findAll(req: Request, res: Response) {
        try {
            const params = req.query;

            res.json(await BookController.service.findAll(params));
        } catch (error) {
            handleError(res, error);
        }
    }

    /**
     * Get all records on database
     *
     * @param req
     * @param res
     */
    public async findById(req: Request, res: Response) {
        try {
            res.json(await BookController.service.findById(req.params.id));
        } catch (error) {
            handleError(res, error);
        }
    }

    /**
     * Update data by id on the database
     *
     * @param req
     * @param res
     */
    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            await BookController.service.update(id, status);

            res.json({ success: true });
        } catch (error) {
            handleError(res, error);
        }
    }

    /**
     * Create new data on the database
     *
     * @param req
     * @param res
     */
    public async create(req: Request, res: Response) {
        try {
            await BookController.service.create(req.body);

            res.json({ success: true });
        } catch (error) {
            handleError(res, error);
        }
    }

    /**
     * Delete a record by id on the database
     *
     * @param req
     * @param res
     */
    public async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await BookController.service.remove(id);

            res.json({ success: true });
        } catch (error) {
            handleError(res, error);
        }
    }
}
