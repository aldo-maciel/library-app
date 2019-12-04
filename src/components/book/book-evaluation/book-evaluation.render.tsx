import React from 'react';
import { Modal } from 'react-bootstrap';
import { BookEvaluationComponent } from './book-evaluation.component';

export class BookEvaluationRender extends BookEvaluationComponent {

    render(): React.ReactElement {
        return (
            <div onClick={ this.open.bind(this) } className={ this.props.className }>
                { this.props.children }
                <Modal show={ this.state.showModal } onHide={ this.close.bind(this) }>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <h4>Popover in a modal</h4>
                        <hr/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={ this.close.bind(this) }>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
