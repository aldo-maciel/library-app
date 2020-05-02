import React from 'react';
import Swal from 'sweetalert2';
import { AxiosResponse } from 'axios';
import { Book } from './book';
import { BookService } from './book.service';
import { onError, onSuccess } from '../../shared/toastr-util';
import { Pagination } from '../paginate/paginate.type';
import { dictionary } from '../../shared/dictionary';
import { userService } from '../user/user.service';

export class BookComponent extends React.Component {
    private pagination!: Pagination;
    protected service: BookService = new BookService();
    protected totalRecords: number = 0;
    public state = { rows: Array<Book>(), redirectLogin: !userService.isLogged() || !userService.getUser().admin };

    /**
     * Find all codes according to the filter
     * @param filter
     */
    async find(filter: string) {
        try {
            const value: AxiosResponse<{ count: number, data: Book[] }> = await this.service.findAll(this.pagination, filter);

            this.totalRecords = value.data.count;
            this.setState({ rows: value.data.data });
        } catch (error) {
            onError(error);
        }
    }

    /**
     * Make a request with parameters
     * @param event
     * @param param
     * @private
     */
    async _doRequest(event: Function, param: any) {
        try {
            await event(param);
            this.find('');
            onSuccess();
        } catch (error) {
            onError(error);
        }
    }

    /**
     * Call <code>find</code> method to update view
     * @param pagination
     */
    onChangePaginate(pagination: Pagination) {
        this.pagination = pagination;
        this.find('');
    }


    /**
     * Build a confirmation modal
     *
     * @param message
     * @param title
     * @private
     */
    _confirm(message: string, title: string = dictionary.CONFIRMAR) {
        return Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: dictionary.SIM,
            cancelButtonText: dictionary.NAO
        });
    }

    removeBook(row: Book) {
        this._confirm(dictionary.getMessageWithParam(dictionary.BOOK_DELETE_CONFIRM, row.name)).then(({ value }) => {
            if (value) {
                this._doRequest(this.service.removeBook, row._id);
            }
        });
    }
}
