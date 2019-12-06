import React from 'react';
import { dictionary } from '../../shared/dictionary';
import { Link } from 'react-router-dom';
import { userService } from '../user/user.service';

export class HeaderRender extends React.Component {

    render(): React.ReactElement {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/home" className="navbar-brand">{ dictionary.HEADER_TITLE }</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" hidden={ !userService.getUser().admin }>
                            <Link className="nav-link" to="/livros">
                                { dictionary.HEADER_BOOKS }
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <span className="mr-sm-2">{ userService.getUser().name }</span>
                        <Link className="my-2 my-sm-0" to="/" onClick={ () => userService.logout() }>
                            <em className="eva eva-log-out-outline eva-lg"/>
                        </Link>
                    </span>
                </div>
            </nav>
        );
    }
}
