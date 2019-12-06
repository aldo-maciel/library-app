import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './service-worker';
import './index.scss';
import 'moment/locale/pt-br';
import { BookRender } from './components/book/book.render';
import { BookRegisterRender } from './components/book/book-regiter/book-register.render';
import { HomePageRender } from './components/home-page/home-page.render';
import { LoginRender } from './components/login/login.render';

moment.locale('pt-br');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ LoginRender }/>
            <Route path="/home" component={ HomePageRender }/>
            <Route path="/livros/cadastrar" component={ BookRegisterRender }/>
            <Route path="/livros/:id" component={ BookRegisterRender }/>
            <Route path="/livros" component={ BookRender }/>
        </Switch>
    </ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
