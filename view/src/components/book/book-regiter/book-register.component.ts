import React, { FormEvent } from 'react';
import { BookService } from '../book.service';
import { onError, onSuccess } from '../../../shared/toastr-util';
import { MatchProps, State } from './book-register.type';
import { Book } from '../book';
import { userService } from '../../user/user.service';

export class BookRegisterComponent extends React.Component<MatchProps, State> {
    private service: BookService = new BookService();
    public state: State = { record: {} as Book, redirect: false, redirectLogin: !userService.isLogged() || !userService.getUser().admin };
    private _id: string = this.props.match.params.id;

    componentDidMount(): void {
        if (this._id) {
            this.service.findById(this._id)
                .then(({ data }) => {
                    this.setState({
                        record: data
                    });
                }, () => {
                    this.setState({
                        redirect: true
                    });
                });
        }
    }

    protected async save($event: FormEvent) {
        $event.preventDefault();
        try {
            if (this._id) {
                await this.service.update(this._id, this.state.record);
            } else {
                await this.service.create(this.state.record);
            }
            onSuccess();
        } catch (error) {
            onError(error);
        } finally {
            this.setState({ redirect: true });
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
     * @param file
     */
    protected getFiles(file: Object) {
        this.setState({
            record: Object.assign(this.state.record, { cover: file })
        });
    }

    /**
     * Update the value state
     * @param description
     */
    protected onChangeDescription(description: string) {
        this.setState({ record: Object.assign(this.state.record, { description }) });
    }

    /**
     * Update the value state
     * @param author
     */
    protected onChangeAuthor(author: string) {
        this.setState({ record: Object.assign(this.state.record, { author }) });
    }
}
