import React from 'react';
// @ts-ignore
import StarRatings from 'react-star-ratings';
import { Modal } from 'react-bootstrap';
import { BookEvaluationComponent } from './book-evaluation.component';
import { dictionary } from '../../../shared/dictionary';

export class BookEvaluationRender extends BookEvaluationComponent {

    render(): React.ReactElement {
        return (
            <div onClick={ () => this.setState({ showModal: true }) } className={ `${ this.props.className } book-evaluation` }>
                { this.props.children }
                <Modal show={ this.state.showModal } centered={ true } dialogClassName="modal-90w">
                    <Modal.Header className="bg-dark">
                        <div className="d-flex justify-content-between flex-grow-1 align-items-center">
                            <div>
                                <h3>{ this.props.book.name }</h3>
                                <h6>{ this.props.book.author }</h6>
                            </div>
                            <button className="btn btn-link btn-lg" onClick={
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
                        <button className="btn btn-dark" onClick={ (event: React.MouseEvent<HTMLElement>) => {
                            event.stopPropagation();
                            this.close();
                        } }>{ dictionary.CLOSE }</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
