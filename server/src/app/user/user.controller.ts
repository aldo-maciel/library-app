import { Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import { userService } from './user.service';
import handleError from '../../shared/error.service';
import { User } from './user';

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
            const { login, password } = req.query as unknown as User;
            const user = await userService.find(login, password);
            if (Object.keys(user).length) {
                res.json(user);
            } else {
                handleError(res, new Error(), httpStatusCodes.INTERNAL_SERVER_ERROR, 'Usuário não encontrado!');
            }
        } catch (error) {
            handleError(res, error);
        }
    }

}
