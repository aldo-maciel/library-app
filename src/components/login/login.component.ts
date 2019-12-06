import React, { FormEvent } from 'react';
import { onError } from '../../shared/toastr-util';
import { State } from './login.type';
import { userService } from '../user/user.service';
import { User } from '../user/user';

export class LoginComponent extends React.Component<any, State> {
    state: State = { record: {} as User, redirect: false, error: false };

    protected async login($event: FormEvent) {
        $event.preventDefault();
        try {
            await userService.login(this.state.record);
            this.setState({ redirect: true });
        } catch (error) {
            this.setState({ error: true });
            onError(error);
        }
    }

    clear() {
        this.setState({ record: {} as User });
    }

    /**
     * Update the value state
     * @param login
     */
    protected onChangeLogin(login: string) {
        this.setState({ record: Object.assign(this.state.record, { login }) });
    }

    /**
     * Update the value state
     * @param password
     */
    protected onChangePassword(password: string) {
        this.setState({ record: Object.assign(this.state.record, { password }) });
    }
}
