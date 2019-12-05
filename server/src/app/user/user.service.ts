import { userModel } from './user.model';
import { User } from './user';

class UserService {
    private user!: User;

    async create({ name = '', password = '', admin = false }) {
        await userModel.create({ name, password, admin });
    }

    async find(user: string, password: string) {
        const _user = await userModel.findOne({ name, password }).lean(true);
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
