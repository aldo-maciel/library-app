import axios, { AxiosResponse } from 'axios';

export class BookEvaluationService {

    private static get URL() {
        if ('production' === process.env.NODE_ENV) {
            return '/api/books-evaluation';
        }
        return 'http://localhost:3001/api/books-evaluation';
    }

    /**
     * Call server to update a record
     * @param bookId
     * @param rating
     */
    evaluate(bookId: string, rating: number): Promise<AxiosResponse<{ success: boolean }>> {
        return axios.post(`${ BookEvaluationService.URL }/${ bookId }`, { rating });
    }
}
