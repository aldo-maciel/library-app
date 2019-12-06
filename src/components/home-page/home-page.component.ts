import React from 'react';
import { BookService } from '../book/book.service';
import { AxiosResponse } from 'axios';
import { Book } from '../book/book';
import { onError } from '../../shared/toastr-util';
import { State } from './home-page.type';
import { Pagination } from '../paginate/paginate.type';
import { userService } from '../user/user.service';

export class HomePageComponent extends React.Component<any, State> {
    protected service: BookService = new BookService();
    protected pagination: Pagination = { start: 0, step: 20, filter: '' };
    public state = { rows: Array<Book>(), redirectLogin: false };

    componentDidMount(): void {
        if (!userService.isLogged()) {
            this.setState({ redirectLogin: true });
            return;
        }
        this.find('');
    }

    /**
     * Find all codes according to the filter
     * @param filter
     */
    async find(filter: string) {
        try {
            const value: AxiosResponse<{ count: number, data: Book[] }> = await this.service.findAll(this.pagination, filter);

            this.setState({ rows: value.data.data });
        } catch (error) {
            onError(error);
        }
    }
}
