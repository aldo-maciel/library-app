import { userModel } from './user.model';
import { User } from './user';

class UserService {
    private user: User = {} as User;

    create(user: User) {
        const { name, password, admin, login } = user;
        return userModel.create({ name, password, admin, login });
    }

    async find(login: string, password: string) {
        const _user = await userModel
            .findOne({
                login,
                password
            }, {
                name: 1,
                admin: 1,
                login: 1
            })
            .lean(true);

        if (_user) {
            this.user = _user;
        }

        return this.getUser();
    }

    getUser() {
        return Object.assign({}, this.user);
    }
}

export const userService = new UserService();
