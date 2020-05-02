import React, { FormEvent } from 'react';
import { onError, onSuccess } from '../../shared/toastr-util';
import { Props, State } from './user-register.type';
import { User } from './user';
import { userService } from './user.service';

export class UserRegisterComponent extends React.Component<Props, State> {
    state: State = { showModal: false, record: {} as User, redirect: false, errors: {} };

    protected async save($event: FormEvent) {
        $event.preventDefault();
        try {
            await userService.create(this.state.record);
            onSuccess();
            this.props.redirect();
        } catch (error) {
            onError(error);
        }
    }

    /**
     * Update the value state
     * @param name
     */
    protected onChangeName(name: string) {
        this.setState({ record: Object.assign(this.state.record, { name }) });
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
     * @param admin
     */
    protected onChangeAdmin(admin: boolean) {
        this.setState({ record: Object.assign(this.state.record, { admin }) });
    }

    /**
     * Update the value state
     * @param password
     */
    protected onChangePassword(password: string) {
        this.setState({ record: Object.assign(this.state.record, { password }) });
    }

    protected onChangeConfirmPassword(password: string) {
        if (password !== this.state.record.password) {
            this.setState({ errors: Object.assign(this.state.errors, { notConfirmed: true }) });
        }
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
}
