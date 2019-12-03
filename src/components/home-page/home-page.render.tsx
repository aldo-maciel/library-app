import { HomePageComponent } from './home-page.component';
import React from 'react';
import { dictionary } from '../../shared/dictionary';

export class HomePageRender extends HomePageComponent {

    render(): React.ReactElement {
        return (
            <div className="main-body">
                <div className="container-fluid home-page">
                    {
                        this.state.rows.map(book => {
                            return (
                                <div className="home-page-card" key={ book._id }>
                                    <div className="home-page-body">
                                        <img src={ book.cover.base64 } alt={ dictionary.BOOK_COVER }/>
                                    </div>
                                    <div className="home-page-card-footer">
                                        <div className="home-page-card-footer-name">
                                            { book.name } - <small>{ book.author }</small>
                                        </div>
                                        <div className="home-page-card-footer-description">
                                            { book.description }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
