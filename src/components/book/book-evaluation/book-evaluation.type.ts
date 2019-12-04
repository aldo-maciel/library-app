import { Book } from '../book';

export interface Props {
    book: Book,
    className: string
}

export type State = {
    record: Book,
    redirect: boolean,
    showModal: boolean
}
