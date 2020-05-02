import React from 'react';
// @ts-ignore
import StarRatings from 'react-star-ratings';
import { Modal } from 'react-bootstrap';
import { BookEvaluationComponent } from './book-evaluation.component';
import { dictionary } from '../../../shared/dictionary';

export class BookEvaluationRender extends BookEvaluationComponent {

    modalEvaluations() {
        if (!this.state.admin) {
            return;
        }
        return <Modal show={ this.state.showEvaluations } centered={ true } onHide={ () => this.setState({ showEvaluations: false }) }>
            <Modal.Header className="bg-dark">
                <div className="d-flex justify-content-between flex-grow-1 align-items-center">
                    <h3>{ dictionary.BOOK_EVALUATION }</h3>
                    <button type="button" className="btn btn-link btn-sm" onClick={
                        (event: React.MouseEvent<HTMLElement>) => {
                            event.stopPropagation();
                            this.setState({ showEvaluations: false });
                        }
                    }>
                        <em className="eva eva-close-circle-outline eva-2x text-muted"/>
                    </button>
                </div>
            </Modal.Header>
            <Modal.Body className="bg-dark">
                { (this.props.book.evaluations || []).map(evaluation => {
                    return <div className="row" key={ evaluation._id }>
                        <div className="col-6">
                            { evaluation.user.name }
                        </div>
                        <div className="col-6">
                            <StarRatings
                                rating={ evaluation.rating }
                                starRatedColor="rgb(237, 242, 94)"
                                starSpacing=".2rem"
                                starDimension="2rem"
                                numberOfStars={ 5 }
                                name='rated'
                            />
                        </div>
                    </div>;
                }) }
            </Modal.Body>
            <Modal.Footer className="bg-dark">
                <button type="button" className="btn btn-dark btn-sm" onClick={ (event: React.MouseEvent<HTMLElement>) => {
                    event.stopPropagation();
                    this.setState({ showEvaluations: false });
                } }>{ dictionary.CLOSE }</button>
            </Modal.Footer>
        </Modal>;
    }

    render(): React.ReactElement {
        return (
            <div onClick={ () => this.setState({ showModal: true }) } className={ `${ this.props.className } book-evaluation` }>
                { this.props.children }
                { this.modalEvaluations() }
                <Modal show={ this.state.showModal } centered={ true } dialogClassName="modal-90w">
                    <Modal.Header className="bg-dark">
                        <div className="d-flex justify-content-between flex-grow-1 align-items-center">
                            <div>
                                <h3>{ this.props.book.name }</h3>
                                <h6>{ this.props.book.author }</h6>
                            </div>
                            <button className="btn btn-link btn-sm" onClick={
                                (event: React.MouseEvent<HTMLElement>) => {
                                    event.stopPropagation();
                                    this.close();
                                }
                            }>
                                <em className="eva eva-close-circle-outline eva-2x text-muted"/>
                            </button>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="bg-dark">
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-link text-light" hidden={ !this.state.admin }
                                    onClick={ () => this.setState({ showEvaluations: true }) }>
                                <h5 className="m-auto">
                                    <span className="badge badge-light font-weight-bolder">{ this.state.evaluations }</span>
                                    <span className="sr-only">unread messages</span>
                                    <span> { dictionary.BOOK_EVALUATION }</span>
                                </h5>
                            </button>
                            <StarRatings
                                rating={ this.state.rating }
                                starRatedColor="rgb(237, 242, 94)"
                                starHoverColor="rgba(237, 242, 94, .5)"
                                starSpacing=".3rem"
                                starDimension="3rem"
                                changeRating={ this.changeRating.bind(this) }
                                numberOfStars={ 5 }
                                name='rating'
                            />
                        </div>
                        <div className="book-evaluation-container">
                            <div className="book-evaluation-container-left">
                                <img className="book-evaluation-cover" src={ this.props.book.cover.base64 } alt={ dictionary.BOOK_COVER }/>
                            </div>
                            <div className="book-evaluation-container-right">
                                <h5>{ dictionary.BOOK_DESCRIPTION }</h5>
                                <div className="book-evaluation-container-right-description">
                                    { this.props.book.description }
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark">
                        <button className="btn btn-dark btn-sm" onClick={ (event: React.MouseEvent<HTMLElement>) => {
                            event.stopPropagation();
                            this.close();
                        } }>{ dictionary.CLOSE }</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
