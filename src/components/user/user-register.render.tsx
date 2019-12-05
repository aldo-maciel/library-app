import React from 'react';
import debounce from '../../shared/debounce';
import { dictionary } from '../../shared/dictionary';
import { UserRegisterComponent } from './user-register.component';
import { Redirect } from 'react-router-dom';

export class UserRegisterRender extends UserRegisterComponent {

    private goToGrid() {
        if (this.state.redirect) {
            return <Redirect to='/home'/>;
        }
    };

    render(): React.ReactElement {
        return (
            <div className="main-body book">
                { this.goToGrid() }
                <div className="container-fluid">
                    <form onSubmit={ $event => this.save($event) }
                          onReset={ () => debounce(() => this.setState({ redirect: true }), 500)() }>
                        <div className="card bg-dark">
                            <div className="card-header">
                                <h4>{ dictionary.BOOK_REGISTER_TITLE }</h4>
                            </div>
                            {/*<div className="card-body">*/ }
                            {/*    <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">*/ }
                            {/*        <label htmlFor="bookName" className="col-form-label">{ dictionary.BOOK_NAME }*</label>*/ }
                            {/*        <input type="text" className="form-control" id="bookName" placeholder={ dictionary.BOOK_PLACEHOLDER_NAME }*/ }
                            {/*               maxLength={ 100 } required value={ this.state.record.name || '' }*/ }
                            {/*               onChange={ $event => this.onChangeName($event.target.value) }/>*/ }
                            {/*    </div>*/ }
                            {/*    <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">*/ }
                            {/*        <label htmlFor="bookDescription" className=" col-form-label">{ dictionary.BOOK_AUTHOR }</label>*/ }
                            {/*        <input type="text" className="form-control" id="bookDescription"*/ }
                            {/*               placeholder={ dictionary.BOOK_PLACEHOLDER_AUTHOR } maxLength={ 40 }*/ }
                            {/*               value={ this.state.record.author || '' } onChange={ $event => this.onChangeAuthor($event.target.value) }/>*/ }
                            {/*    </div>*/ }
                            {/*    <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">*/ }
                            {/*        <label htmlFor="bookDescription" className=" col-form-label">{ dictionary.BOOK_DESCRIPTION }</label>*/ }
                            {/*        <textarea className="form-control" id="bookDescription" maxLength={ 4000 }*/ }
                            {/*                  placeholder={ dictionary.BOOK_PLACEHOLDER_DESCRIPTION } value={ this.state.record.description || '' }*/ }
                            {/*                  onChange={ $event => this.onChangeDescription($event.target.value) } rows={ 10 }/>*/ }
                            {/*    </div>*/ }
                            {/*    <small className="text-danger">{ dictionary.MANDATORY }</small>*/ }
                            {/*</div>*/ }
                            <div className="card-footer">
                                <div className="pull-right">
                                    <button className="btn btn-success" type="submit">{ dictionary.SALVAR }</button>
                                    <button className="btn btn-dark" type="reset">{ dictionary.CANCEL }</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
