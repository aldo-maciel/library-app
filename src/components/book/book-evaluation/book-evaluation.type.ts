import { Book } from '../book';

export interface Props {
    book: Book,
    className: string
}

export type State = {
    showModal: boolean
    rating: number
}
