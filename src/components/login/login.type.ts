import { User } from '../user/user';

export type State = {
    record: User,
    error: boolean,
    redirect: boolean
}
