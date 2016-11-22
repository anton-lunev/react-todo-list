import React, {Component} from 'react';
import './search-field.pcss';

export class SearchFieldFilter extends Component {
    render() {
        return (
            <div className="search-field">
                <input className="search-field__input default round"
                       type="text"
                       placeholder="Search"/>
                <button className="search-field__button">
                    <i className="material-icons">search</i>
                </button>
            </div>
        )
    }
}
