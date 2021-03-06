import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from './book';
import { dictionary } from '../../shared/dictionary';

export class BookColumnCreator {
    private static noop() {
    }


    /**
     * Return a react action element
     * @param row
     * @param deleteRecord
     */
    static getActionsIcons(row: Book, deleteRecord: Function = this.noop) {
        return <div className="d-inline-flex justify-content-around flex-wrap">
            <Link to={ `/livros/${ row._id }` } className="btn btn-link text-light" title={ dictionary.EDITAR_REGISTRO }>
                <em className="eva eva-edit eva-2x"/>
            </Link>
            <button className="btn btn-link text-light" title={ dictionary.DELETAR_REGISTRO } onClick={ () => deleteRecord(row) }>
                <em className="eva eva-trash eva-2x"/>
            </button>
        </div>;
    }

}
