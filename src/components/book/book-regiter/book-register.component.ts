import React, { FormEvent } from 'react';
import { BookService } from '../book.service';
import { onError, onSuccess } from '../../../shared/toastr-util';
import { MatchProps, State } from './book-register.type';
import { Book } from '../book';

export class BookRegisterComponent extends React.Component<MatchProps, State> {
    private service: BookService = new BookService();
    public state: State = { record: {} as Book, redirect: false };
    private _id: string = this.props.match.params.id;

    componentDidMount(): void {
        if (this._id) {
            this.service.findById(this._id)
                .then(({ data }) => {
                    this.setState({
                        record: data
                    });
                });
        }
    }

    /**
     * Create a new code and call the find prop to update the grid
     * @param $event
     */
    protected async create($event: FormEvent) {
        $event.preventDefault();
        try {
            await this.service.create(this.state.record);
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
