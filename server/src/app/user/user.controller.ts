import { Request, Response } from 'express';
import { userService } from './user.service';
import httpStatusCode from 'http-status-codes';

export class UserController {

    async create(req: Request, res: Response) {
        try {
            const { name, password, admin } = req.params;
            await userService.create({ name, password, admin: admin === 'true' });
            res.json({ success: true });
        } catch (error) {
            throw error;
        }

    }

    async login(req: Request, res: Response) {
        try {
            const { name, password } = req.params;
            const user = await userService.find(name, password);
            if (user) {
                res.json(user);
            } else {
                res.status(httpStatusCode.BAD_REQUEST).json(null);
                throw new Error('Usuário não encontrado!');
            }
        } catch (error) {
            throw error;
        }
    }

}
