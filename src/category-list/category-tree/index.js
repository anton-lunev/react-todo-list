import React, {Component} from 'react';
import {Category} from '../category'
import './category-tree.pcss';

export class CategoryTree extends Component {

    render() {
        return (
            <div className="category-list">
                {this.props.data.map((category, i) => {
                    return <div className="category-list__item" key={i}><Category data={category}/></div>
                })}
            </div>
        )
    }
}
