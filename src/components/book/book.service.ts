import axios, { AxiosResponse } from 'axios';
import { Book } from './book';
import { Pagination } from '../paginate/paginate.type';

export class BookService {

    private static get URL() {
        if ('production' === process.env.NODE_ENV) {
            return '/api/books';
        }
        return 'http://localhost:3001/api/books';
    }

    /**
     * Call server to get data
     *
     * @param params
     * @param text
     */
    findAll(params: Pagination, text: string): Promise<AxiosResponse<{ count: number, data: Book[] }>> {
        if (params.filter.text !== text) {
            params.start = 0;
        }
        params.filter = { text };
        return axios.get<{ count: number, data: Book[] }>(BookService.URL, { params });
    }

    /**
     * Find on by id
     *
     * @param id
     */
    findById(id: string): Promise<AxiosResponse<Book>> {
        return axios.get<Book>(`${ BookService.URL }/${ id }`);
    }


    /**
     * Call server to update
     * @param id
     */
    removeBook(id: string): Promise<AxiosResponse<{ success: boolean }>> {
        return axios.delete(`${ BookService.URL }/${ id }`);
    }

    /**
     * Call server to create a new record
     * @param record
     */
    create(record: Book): Promise<AxiosResponse<{ success: boolean }>> {
        return axios.post(BookService.URL, record);
    }

    /**
     * Call server to update a record
     * @param id
     * @param record
     */
    update(id: string, record: Book): Promise<AxiosResponse<{ success: boolean }>> {
        return axios.put(`${ BookService.URL }/${ id }`, record);
    }
}
