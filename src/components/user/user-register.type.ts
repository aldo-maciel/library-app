import { User } from './user';

export type Props = {
    redirect(): void
}

export type State = {
    record: User,
    redirect: boolean,
    showModal: boolean,
    errors: Object
}
