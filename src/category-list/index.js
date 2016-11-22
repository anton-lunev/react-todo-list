import React, {Component} from 'react';
import {CategoryTree} from './category-tree'

export class CategoryList extends Component {
    constructor() {
        super();

        this.categories = [
            {
                name: 'Category 1',
                children: [
                    {
                        name: 'Category 1.1',
                        children: [
                            {name: 'Category 1.1.1'},
                            {name: 'Category 1.1.2'}
                        ]
                    },
                    {name: 'Category 1.2'}
                ]
            },
            {name: 'Category 2'}
        ]
    }

    render() {
        return <CategoryTree data={this.categories}/>
    }
}
