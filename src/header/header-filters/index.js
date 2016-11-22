import React, {Component} from 'react';
import './header-filters.pcss';
import {ShowActiveFilter} from './show-active';
import {SearchFieldFilter} from './search-field';

export class HeaderFilters extends Component {
    render() {
        return (
            <div className="filters">
                <div className="filters__item">
                    <ShowActiveFilter/>
                </div>
                <div className="filters__item">
                    <SearchFieldFilter/>
                </div>
            </div>
        )
    }
}
