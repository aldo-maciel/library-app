import React, { FormEvent } from 'react';
import { onError, onSuccess } from '../../shared/toastr-util';
import { State } from './user-register.type';

export class UserRegisterComponent extends React.Component<any, State> {

    protected async save($event: FormEvent) {
        $event.preventDefault();
        try {
            // if (this._id) {
            //     await this.service.update(this._id, this.state.record);
            // } else {
            //     await this.service.create(this.state.record);
            // }
            onSuccess();
        } catch (error) {
            onError(error);
        } finally {
            this.setState({ redirect: true });
        }
    }
}
