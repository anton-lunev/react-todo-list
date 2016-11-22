import React, {Component} from 'react';
import {HeaderFilters} from './header-filters'
import logo from './logo.svg';
import './header.pcss';

export class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <header className="header container">
                    <div className="header__section">
                        <div className="app-logo">
                            <img className="app-logo__img" src={logo} alt="logo"/>
                            <span className="app-logo__text">TODO-LIST</span>
                        </div>
                    </div>
                    <div className="header__section">
                        <HeaderFilters/>
                    </div>
                </header>
            </div>
        )
    }
}
