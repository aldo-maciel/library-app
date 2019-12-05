import axios, { AxiosResponse } from 'axios';
import { User } from './user';

class UserService {
    private user!: User;

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
    create(record: User): Promise<AxiosResponse<{ success: boolean }>> {
        return axios.post(UserService.URL, record);
    }

    async login(user: User): Promise<User> {
        try {
            if (this.user) {
                return Object.assign({}, this.user);
            }
            const { data } = await axios.get(UserService.URL, { params: { user } });
            this.user = data.user;
            return Object.assign({}, data.user);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    isLogged() {
        return !!this.user;
    }
}

export const userService = new UserService();
