import { RouteComponentProps } from 'react-router-dom';
import { Book } from '../book';

interface Props {
    id: string;
}

export interface MatchProps extends RouteComponentProps<Props> {
}

export type State = {
    record: Book,
    redirect: boolean,
    redirectLogin: boolean
}
