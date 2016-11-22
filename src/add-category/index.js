import React, {Component} from 'react';
import './add-category.pcss';

export class AddCategory extends Component {
    render() {
        return (
            <form className="add-category">
                <input className="add-category__input white" type="text"
                       placeholder="Enter category title"/>
                <button type="submit" className="add-category__button">Add</button>
            </form>
        )
    }
}
