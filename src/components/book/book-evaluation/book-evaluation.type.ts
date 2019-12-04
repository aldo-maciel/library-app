import { Book } from '../book';

export interface Props {
    book: Book;
}

export type State = {
    record: Book,
    redirect: boolean
}
