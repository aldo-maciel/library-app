import React from 'react';
import { dictionary } from '../../shared/dictionary';
import { UserRegisterComponent } from './user-register.component';
import { Modal } from 'react-bootstrap';

export class UserRegisterRender extends UserRegisterComponent {

    render(): React.ReactElement {
        return (
            <button type="button" onClick={ () => this.setState({ showModal: true }) } className="btn btn-link">
                { dictionary.USER_REGISTER }
                <Modal show={ this.state.showModal } centered={ true } dialogClassName="modal-lg">
                    <form onSubmit={ $event => this.save($event) } onReset={ () => this.close() }>
                        <Modal.Header className="bg-dark">
                            <div className="d-flex justify-content-between flex-grow-1 align-items-center">
                                <h5>{ dictionary.USER_REGISTER }</h5>
                                <button type="button" className="btn btn-link" onClick={
                                    (event: React.MouseEvent<HTMLElement>) => {
                                        event.stopPropagation();
                                        this.close();
                                    }
                                }><em className="eva eva-close-circle-outline eva-2x text-muted"/></button>
                            </div>
                        </Modal.Header>
                        <Modal.Body className="bg-dark">
                            <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                <label htmlFor="userName" className="col-form-label">{ dictionary.USER_NAME }*</label>
                                <input type="text" className="form-control" id="userName" placeholder={ dictionary.USER_PLACEHOLDER_NAME }
                                       maxLength={ 100 } required value={ this.state.record.name || '' }
                                       onChange={ $event => this.onChangeName($event.target.value) }/>
                            </div>
                            <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                <label htmlFor="userLogin" className="col-form-label">{ dictionary.USER_LOGIN }*</label>
                                <input type="text" className="form-control" id="userLogin" placeholder={ dictionary.USER_PLACEHOLDER_LOGIN }
                                       maxLength={ 30 } required value={ this.state.record.login || '' }
                                       onChange={ $event => this.onChangeLogin($event.target.value) }/>
                            </div>
                            <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                <label htmlFor="userPassword" className=" col-form-label">{ dictionary.USER_PASSWORD }*</label>
                                <input type="password" className="form-control" id="userPassword" required
                                       placeholder={ dictionary.USER_PASSWORD_PLACEHOLDER } maxLength={ 10 }
                                       value={ this.state.record.password || '' }
                                       onChange={ $event => this.onChangePassword($event.target.value) }/>
                            </div>
                            <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                <label htmlFor="confirmPassword" className=" col-form-label">{ dictionary.USER_CONFIRM_PASSWORD }*</label>
                                <input type="password" className="form-control" id="confirmPassword" maxLength={ 10 }
                                       placeholder={ dictionary.USER_CONFIRM_PASSWORD_PLACEHOLDER } required
                                       onChange={ $event => this.onChangeConfirmPassword($event.target.value) }/>
                            </div>
                            <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 form-group">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="userAdmin"
                                           onChange={ $event => this.onChangeAdmin($event.target.checked) } checked={ this.state.record.admin }/>
                                    <label className="form-check-label pointer" htmlFor="userAdmin">{ dictionary.USER_ADMIN }</label>
                                </div>
                            </div>
                            <small className="text-danger">{ dictionary.MANDATORY }</small>
                        </Modal.Body>
                        <Modal.Footer className="bg-dark">
                            <button type="submit" className="btn btn-success btn-sm">{ dictionary.SALVAR }</button>
                            <button type="reset" className="btn btn-dark btn-sm" onClick={ (event: React.MouseEvent<HTMLElement>) => {
                                event.stopPropagation();
                                this.close();
                            } }>{ dictionary.CLOSE }</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </button>
        );
    }
}
