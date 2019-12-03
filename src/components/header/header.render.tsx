import React from 'react';
import { dictionary } from '../../shared/dictionary';
import { Link } from 'react-router-dom';

export class HeaderRender extends React.Component {

    render(): React.ReactElement {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">{ dictionary.HEADER_TITLE }</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/avaliacoes">
                                { dictionary.HEADER_EVALUATION }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/livros">
                                { dictionary.HEADER_BOOKS }
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
