import { User } from '../../user/user';

export interface BookEvaluation {
    userId: string;
    rating: number;
    bookId: string;
    user: User;
}
