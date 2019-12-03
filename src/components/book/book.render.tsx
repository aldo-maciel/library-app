import React from 'react';
import { BookColumnCreator } from './book-column-creator';
import { BookComponent } from './book.component';
import { dictionary } from '../../shared/dictionary';
import { PaginateRender } from '../paginate/paginate.render';
import { Pagination } from '../paginate/paginate.type';
import { Link } from 'react-router-dom';

export class BookRender extends BookComponent {

    render(): React.ReactElement {
        return (
            <div className="main-body book">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h3>{ dictionary.BOOK_TITLE }</h3>
                        </div>
                        <div className="card-body">
                            <Link to="/livros/cadastrar">
                                <em className="eva eva-plus-outline"/>{ dictionary.BOOK_ADD_NEW }
                            </Link>
                            <table className="table table-hover table-striped table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">{ dictionary.BOOK_NAME }</th>
                                        <th className="text-center">{ dictionary.BOOK_AUTHOR }</th>
                                        <th className="text-center">{ dictionary.BOOK_DESCRIPTION }</th>
                                        <th className="text-center">{ dictionary.BOOK_COVER }</th>
                                        <th className="text-center">{ dictionary.BOOK_ACTIONS }</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.rows.map(row => {
                                            return (
                                                <tr key={ row._id }>
                                                    <td className="text-center">{ row.name }</td>
                                                    <td className="text-center">{ row.author } </td>
                                                    <td className="text-center">{ row.description }</td>
                                                    <td className="text-center">
                                                        <div className="cover">
                                                            <img
                                                                src={ row.cover.base64 }
                                                                alt={ dictionary.BOOK_COVER }
                                                                width={ 200 }
                                                                height={ 100 }/>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">{
                                                        BookColumnCreator.getActionsIcons(row,  this.removeBook.bind(this))
                                                    }</td>
                                                </tr>
                                            );
                                        })
                                    }
                                    {
                                        this.state.rows.length === 0 &&
                                        <tr className="no-hover">
                                            <td colSpan={ 5 }>{ dictionary.NENHUM_REGISTRO_ENCONTRADO }</td>
                                        </tr>
                                    }
                                </tbody>
                                <tfoot>
                                    <tr className="no-hover">
                                        <td colSpan={ 5 }>
                                            <PaginateRender onChange={ (pagination: Pagination) => this.onChangePaginate(pagination) }
                                                            step={ 10 }
                                                            totalRecords={ this.totalRecords }/>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
