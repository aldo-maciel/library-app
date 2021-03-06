import { BookEvaluation } from './book-evaluation/book-evaluation';

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
    evaluations: [BookEvaluation]
}
