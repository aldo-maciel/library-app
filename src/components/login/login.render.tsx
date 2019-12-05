import React from 'react';
import debounce from '../../shared/debounce';
import { LoginComponent } from './login.component';
import { Redirect } from 'react-router-dom';
import { dictionary } from '../../shared/dictionary';

export class LoginRender extends LoginComponent {

    private goToHome() {
        if (this.state.redirect) {
            return <Redirect to='/home'/>;
        }
    };

    render(): React.ReactElement {
        return (
            <div className="login">
                { this.goToHome() }
                <div className="login-container">
                    <form className="row"
                          onSubmit={ $event => debounce(() => this.login($event), 500) }
                          onReset={ debounce(this.clear.bind(this), 500) }>
                        <div className="col-8 col-sm-12">
                            <label htmlFor="bookName" className="col-form-label">{ dictionary.USER_LOGIN }</label>
                            <input type="text" className="form-control" id="bookName" placeholder={ dictionary.USER_LOGIN_PLACEHOLDER }
                                   maxLength={ 40 } required value={ this.state.record.name || '' }
                                   onChange={ $event => this.onChangeLogin($event.target.value) }/>
                        </div>
                        <div className="col-8 col-sm-12 form-group">
                            <label htmlFor="bookDescription" className=" col-form-label">{ dictionary.USER_PASSWORD }</label>
                            <input type="text" className="form-control" id="bookDescription" required
                                   placeholder={ dictionary.USER_PASSWORD_PLACEHOLDER } maxLength={ 40 } value={ this.state.record.password || '' }
                                   onChange={ $event => this.onChangePassword($event.target.value) }/>
                        </div>
                        <div className="col-8 col-sm-12 form-group d-flex justify-content-end flex-wrap">
                            <button className="btn btn-success btn-sm form-group" type="submit">{ dictionary.USER_LOGIN_BTN }</button>
                            <button className="btn btn-dark btn-sm form-group" type="reset">{ dictionary.CANCEL }</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
