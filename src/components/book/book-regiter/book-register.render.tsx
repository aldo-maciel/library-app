import React from 'react';
import debounce from '../../../shared/debounce';
import { dictionary } from '../../../shared/dictionary';
import { BookRegisterComponent } from './book-register.component';
// @ts-ignore
import FileInputComponent from 'react-file-input-previews-base64';
import { Redirect } from 'react-router-dom';

export class BookRegisterRender extends BookRegisterComponent {

    private goToGrid() {
        if (this.state.redirect) {
            return <Redirect to='/livros'/>;
        }
    };

    render(): React.ReactElement {
        return (
            <div className="main-body book">
                { this.goToGrid() }
                <div className="container-fluid">
                    <form onSubmit={ $event => this.save($event) }
                          onReset={ () => debounce(() => this.setState({ redirect: true }), 500)() }>
                        <div className="card">
                            <div className="card-header">
                                <h4>{ dictionary.BOOK_REGISTER_TITLE }</h4>
                            </div>
                            <div className="card-body">
                                <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                    <label htmlFor="bookName" className="col-form-label">{ dictionary.BOOK_NAME }*</label>
                                    <input type="text" className="form-control" id="bookName" placeholder={ dictionary.BOOK_PLACEHOLDER_NAME }
                                           maxLength={ 100 } required value={ this.state.record.name || '' }
                                           onChange={ $event => this.onChangeName($event.target.value) }/>
                                </div>
                                <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                    <label htmlFor="bookDescription" className=" col-form-label">{ dictionary.BOOK_AUTHOR }</label>
                                    <input type="text" className="form-control" id="bookDescription"
                                           placeholder={ dictionary.BOOK_PLACEHOLDER_AUTHOR } maxLength={ 250 }
                                           value={ this.state.record.author || '' } onChange={ $event => this.onChangeAuthor($event.target.value) }/>
                                </div>
                                <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                    <label htmlFor="bookDescription" className=" col-form-label">{ dictionary.BOOK_DESCRIPTION }</label>
                                    <input type="text" className="form-control" id="bookDescription" maxLength={ 4000 }
                                           placeholder={ dictionary.BOOK_PLACEHOLDER_DESCRIPTION } value={ this.state.record.description || '' }
                                           onChange={ $event => this.onChangeDescription($event.target.value) }/>
                                </div>
                                <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                    <label htmlFor="bookDescription" className=" col-form-label">{ dictionary.BOOK_COVER }(Max. 3mb)</label>
                                    <div>
                                        <img src={ (this.state.record.cover || {}).base64 || '' }
                                             alt={ dictionary.BOOK_COVER }
                                             width={ 300 }
                                             height={ 200 }/>
                                        <FileInputComponent labelText={ '' } callbackFunction={ this.getFiles.bind(this) } accept="image/png"
                                                            multiple={ false } imagePreview={ false }
                                                            buttonComponent={
                                                                <button type="button"
                                                                        className="btn btn-outline-primary">
                                                                    { dictionary.BOOK_SELECT }
                                                                </button>
                                                            }/>
                                    </div>
                                </div>
                                <small className="text-danger">{ dictionary.MANDATORY }</small>
                            </div>
                            <div className="card-footer">
                                <div className="pull-right">
                                    <button className="btn btn-outline-success" type="submit">{ dictionary.SALVAR }</button>
                                    <button className="btn btn-outline-dark" type="reset">{ dictionary.CANCEL }</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
