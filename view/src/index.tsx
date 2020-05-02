import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import moment from 'moment';
import { Route, Router, Switch } from 'react-router-dom';

import * as serviceWorker from './service-worker';
import './index.scss';
import 'moment/locale/pt-br';
import { BookRender } from './components/book/book.render';
import { BookRegisterRender } from './components/book/book-regiter/book-register.render';
import { HomePageRender } from './components/home-page/home-page.render';
import { LoginRender } from './components/login/login.render';

moment.locale('pt-br');

ReactDOM.render(
    <Router history={ createHashHistory() }>
        <Switch>
            <Route path="/" exact component={ LoginRender }/>
            <Route path="/home" component={ HomePageRender }/>
            <Route path="/livros/cadastrar" component={ BookRegisterRender }/>
            <Route path="/livros/:id" component={ BookRegisterRender }/>
            <Route path="/livros" component={ BookRender }/>
            <Route path="*" component={ () => <h1 className="w100 min-vh-100 d-flex justify-content-center align-items-center">Page not found</h1> }/>
        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
