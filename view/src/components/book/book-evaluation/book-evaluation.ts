import { User } from '../../user/user';

export interface BookEvaluation {
    _id: string;
    userId: string;
    rating: number;
    bookId: string;
    user: User;
}
