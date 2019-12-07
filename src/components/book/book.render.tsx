import React from 'react';
import { BookColumnCreator } from './book-column-creator';
import { BookComponent } from './book.component';
import { dictionary } from '../../shared/dictionary';
import { PaginateRender } from '../paginate/paginate.render';
import { Pagination } from '../paginate/paginate.type';
import { Link, Redirect } from 'react-router-dom';
import { HeaderRender } from '../header/header.render';

export class BookRender extends BookComponent {

    render(): React.ReactElement {
        return this.state.redirectLogin ? <Redirect to='/'/> : (
            <div>
                <HeaderRender/>
                <div className="main-body book">
                    <div className="container-fluid">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <h3>{ dictionary.BOOK_TITLE }</h3>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-success btn-sm d-inline-flex align-items-center" to="/livros/cadastrar">
                                    <em className="eva eva-plus-outline eva-2x"/><span>{ dictionary.BOOK_ADD_NEW }</span>
                                </Link>
                                <table className="table table-hover table-striped table-striped table-borderless table-dark">
                                    <thead>
                                        <tr>
                                            <th className="text-center">{ dictionary.BOOK_COVER }</th>
                                            <th className="text-center">{ dictionary.BOOK_NAME }</th>
                                            <th className="text-center">{ dictionary.BOOK_AUTHOR }</th>
                                            <th className="text-center">{ dictionary.BOOK_DESCRIPTION }</th>
                                            <th className="text-center">{ dictionary.BOOK_ACTIONS }</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.rows.map(row => {
                                                return (
                                                    <tr key={ row._id }>
                                                        <td className="text-center">
                                                            <div className="cover">
                                                                <img className="cover-img" src={ row.cover.base64 } alt={ dictionary.BOOK_COVER }/>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">{ row.name }</td>
                                                        <td className="text-center">{ row.author } </td>
                                                        <td className="text-center" title={ row.description }>
                                                            <div className="description">
                                                                { row.description.substring(0, 250) }
                                                            </div>
                                                        </td>
                                                        <td className="text-center">{
                                                            BookColumnCreator.getActionsIcons(row, this.removeBook.bind(this))
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
            </div>
        );
    }
}
