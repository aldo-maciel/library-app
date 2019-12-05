import React, { FormEvent } from 'react';
import { onError, onSuccess } from '../../shared/toastr-util';
import { State } from './login.type';
import { userService } from '../user/user.service';
import { User } from '../user/user';

export class LoginComponent extends React.Component<any, State> {
    state: State = { record: {} as User, redirect: false };

    protected async login($event: FormEvent) {
        $event.preventDefault();
        try {
            await userService.login(this.state.record);
            onSuccess();
        } catch (error) {
            onError(error);
        } finally {
            this.setState({ redirect: true });
        }
    }

    clear() {
        this.setState({ record: {} as User });
    }

    /**
     * Update the value state
     * @param name
     */
    protected onChangeLogin(name: string) {
        this.setState({ record: Object.assign(this.state.record, { name }) });
    }

    /**
     * Update the value state
     * @param password
     */
    protected onChangePassword(password: string) {
        this.setState({ record: Object.assign(this.state.record, { password }) });
    }
}
