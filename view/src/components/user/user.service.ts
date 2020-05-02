import axios from 'axios';
import { User } from './user';

class UserService {

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
        localStorage.setItem('user', JSON.stringify(data));
    }

    async login(params: User) {
        const { data } = await axios.get(UserService.URL, { params });
        if (!data) {
            throw new Error();
        }
        localStorage.setItem('user', JSON.stringify(data));
    }

    logout() {
        localStorage.removeItem('user');
    }

    isLogged() {
        return !!localStorage.getItem('user');
    }

    getUser() {
        return Object.assign({}, JSON.parse(localStorage.getItem('user') as string));
    }
}

export const userService = new UserService();
