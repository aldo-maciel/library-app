import React from 'react';
import { onError, onSuccess } from '../../../shared/toastr-util';
import { Props, State } from './book-evaluation.type';
import { BookEvaluationService } from './book-evaluation.service';
import { userService } from '../../user/user.service';

export class BookEvaluationComponent extends React.Component<Props, State> {
    private service: BookEvaluationService = new BookEvaluationService();
    public state: State = { showModal: false, rating: 0, evaluations: 0, admin: false, showEvaluations: false };

    componentDidMount(): void {
        const user = userService.getUser();
        if (user.admin) {
            this.setState({
                admin: user.admin,
                evaluations: (this.props.book.evaluations || []).length
            });
        }
        if (this.props.book.evaluation) {
            this.setState({
                rating: this.props.book.evaluation.rating
            });
        }
    }

    protected async evaluate(newRating: number) {
        try {
            await this.service.evaluate(this.props.book._id, newRating);
            onSuccess();
        } catch (error) {
            onError(error);
        }
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    changeRating(newRating: number) {
        this.setState({ rating: newRating });
        this.evaluate(newRating);
    }
}
