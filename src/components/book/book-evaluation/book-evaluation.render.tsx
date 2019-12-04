import React from 'react';
import debounce from '../../../shared/debounce';
import { BookEvaluationComponent } from './book-evaluation.component';

export class BookEvaluationRender extends BookEvaluationComponent {

    render(): React.ReactElement {
        return (
            <div className="main-body book">
                <div className="container-fluid">
                    <form onSubmit={ $event => this.save($event) }
                          onReset={ () => debounce(() => this.setState({ redirect: true }), 500)() }>
                        the book is on the table table table table table table table!!!
                    </form>
                </div>
            </div>
        );
    }
}
