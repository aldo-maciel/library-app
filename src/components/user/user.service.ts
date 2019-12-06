import axios from 'axios';
import { User } from './user';

class UserService {
    private user: User = {} as User;

    private static get URL() {
        if ('production' === process.env.NODE_ENV) {
            return '/api/users';
        }
        return 'http://localhost:3001/api/users';
    }

    /**
     * Call server to create a new record
     * @param record
     */
    async create(record: User) {
        const { data } = await axios.post(UserService.URL, record);
        if (!data) {
            throw new Error();
        }
        this.user = data;
    }

    async login(params: User) {
        const { data } = await axios.get(UserService.URL, { params });
        if (!data) {
            throw new Error();
        }
        this.user = data;
    }

    logout() {
        this.user = {} as User;
    }

    isLogged() {
        return !!(this.user && this.user._id);
    }

    getUser() {
        return Object.assign({}, this.user);
    }
}

export const userService = new UserService();
