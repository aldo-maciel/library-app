import { HomePageComponent } from './home-page.component';
import React from 'react';
import { dictionary } from '../../shared/dictionary';

export class HomePageRender extends HomePageComponent {

    render(): React.ReactElement {
        return (
            <div className="main-body">
                <div className="container-fluid">
                    <div className="home-page">
                        {
                            this.state.rows.map(book => {
                                return (
                                    <div className="col-md-12 col-lg-6 col-xl-4 col-sm-12" key={ book._id } data-target="#exampleModal"
                                         data-toggle="modal">
                                        <div className="home-page-card bg-dark">
                                            <div className="home-page-card-img">
                                                <img className="home-page-card-cover" src={ book.cover.base64 } alt={ dictionary.BOOK_COVER }/>
                                                <div className="home-page-card-author">
                                                    <small>{ book.author }</small>
                                                </div>
                                            </div>
                                            <div className="home-page-card-text">
                                                <div className="home-page-card-name">
                                                    { book.name }
                                                </div>
                                                <div className="home-page-card-description text-muted">
                                                    { book.description }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
