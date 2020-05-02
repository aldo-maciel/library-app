import { userModel } from './user.model';
import { User } from './user';

class UserService {
    private user: User = {} as User;

    async create(user: User) {
        const { name, password, admin, login } = user;
        await userModel.create({ name, password, admin, login });

        return this.find(login, password);
    }

    async find(login: string, password: string) {
        delete this.user;
        const users = await userModel
            .find({
                login,
                password
            }, {
                name: 1,
                admin: 1,
                login: 1
            })
            .lean(true);
        const _user = users.pop();
        if (_user) {
            this.user = _user;
        }

        return this.getUser();
    }

    getUser(): User {
        return Object.assign({}, this.user);
    }
}

export const userService = new UserService();
