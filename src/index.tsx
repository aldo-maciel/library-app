import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HeaderRender } from './components/header/header.render';
import * as serviceWorker from './service-worker';
import './index.scss';
import 'moment/locale/pt-br';
import { BookRender } from './components/book/book.render';
import { BookRegisterRender } from './components/book/book-regiter/book-register.render';

moment.locale('pt-br');

ReactDOM.render(
    <BrowserRouter>
        <HeaderRender/>
        <Switch>
            <Route path="/" exact/>
            <Route path="/livros/cadastrar" component={ BookRegisterRender }/>
            <Route path="/livros/:id" component={ BookRegisterRender }/>
            <Route path="/livros" component={ BookRender }/>
        </Switch>
    </ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
