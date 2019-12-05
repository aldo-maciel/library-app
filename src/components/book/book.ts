import { BookEvaluation } from '../../../server/src/app/book/book-evaluation/book-evaluation';

export interface Book {
    _id: string;
    name: string;
    author: string;
    cover: {
        base64: string,
        name: string,
        size: number,
        type: string
    };
    description: string,
    evaluation: BookEvaluation
}
