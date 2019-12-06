import { Request, Response } from 'express';
import { userService } from './user.service';
import handleError from '../../shared/error.service';

export class UserController {

    async create(req: Request, res: Response) {
        try {
            const { name, password, admin, login } = req.body;
            const data: any = await userService.create({ name, password, admin, login, _id: '' });
            delete data.password;
            res.json(data);
        } catch (error) {
            handleError(res, error);
        }

    }

    async login(req: Request, res: Response) {
        try {
            const { login, password } = req.query;
            const user = await userService.find(login, password);
            if (user) {
                res.json(user);
            } else {
                throw new Error('Usuário não encontrado!');
            }
        } catch (error) {
            handleError(res, error);
        }
    }

}
