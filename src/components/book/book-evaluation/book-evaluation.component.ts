import React, { FormEvent } from 'react';
import { BookService } from '../book.service';
import { onError, onSuccess } from '../../../shared/toastr-util';
import { Props, State } from './book-evaluation.type';
import { Book } from '../book';

export class BookEvaluationComponent extends React.Component<Props, State> {
    private service: BookService = new BookService();
    public state: State = { record: {} as Book, redirect: false, showModal: false };

    protected async save($event: FormEvent) {
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

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
}
