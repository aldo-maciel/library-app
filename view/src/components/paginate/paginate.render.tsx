import React from 'react';
import { dictionary } from '../../shared/dictionary';
import { PaginateComponent } from './paginate.component';

export class PaginateRender extends PaginateComponent {
    /**
     * Create paginate info counters
     */
    private getInfo() {
        const from = this.props.totalRecords > 0 ? (this.pagination.start || 0) + 1 : 0;
        const of = (this.pagination.start + this.props.step) > this.props.totalRecords ? this.props.totalRecords : (this.pagination.start + this.props.step);
        return (
            <div className="mt-auto">
                { dictionary.PAGINATE_MOSTRANDO } { from } { dictionary.PAGINATE_ATE } { of } { dictionary.PAGINATE_DE } { this.props.totalRecords }
            </div>
        );
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return <div className="d-flex justify-content-between">
            { this.getInfo() }
            <div>
                <button disabled={ this.pagination.start < this.props.step } onClick={ () => this.paginate(0) }
                        className="btn btn-link" title={ dictionary.PAGINATE_PRIMEIRA }>
                    <em className="eva eva-arrowhead-left eva-2x"/>
                </button>
                <button disabled={ this.pagination.start < this.props.step } onClick={ () => this.paginate(2) }
                        className="btn btn-link" title={ dictionary.PAGINATE_ANTERIOR }>
                    <em className="eva eva-chevron-left eva-3x"/>
                </button>
                <button disabled={ this.props.totalRecords <= (this.props.step + this.pagination.start) } onClick={ () => this.paginate(1) }
                        className="btn btn-link" title={ dictionary.PAGINATE_PROXIMA }>
                    <em className="eva eva-chevron-right-outline eva-3x"/>
                </button>
                <button disabled={ this.props.totalRecords <= (this.props.step + this.pagination.start) } onClick={ () => this.paginate(3) }
                        className="btn btn-link" title={ dictionary.PAGINATE_ULTIMA }>
                    <em className="eva eva-arrowhead-right eva-2x"/>
                </button>
            </div>
        </div>;
    }
}
