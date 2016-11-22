import React, {Component} from 'react';
import {CategoryTree} from '../category-tree'
import './category.pcss';

export class Category extends Component {
    constructor() {
        super();
        this.state = {collapsed: true};
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                <div className="category">
                    <div className="category__left-side">
                        <div className="category__collapse">
                            {this.props.data.children && (
                                <i className="material-icons" onClick={this.toggle.bind(this)}>
                                    {this.state.collapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                                </i>
                            )}
                        </div>
                        <div className="category__title">{this.props.data.name}</div>
                    </div>
                    <div className="category__buttons">
                        <i className="material-icons">mode_edit</i>
                        <i className="material-icons">delete_forever</i>
                        <i className="material-icons">add_circle_outline</i>
                    </div>
                </div>
                {this.props.data.children && !this.state.collapsed && (
                    <div className="internal-tree">
                        <CategoryTree data={this.props.data.children}/>
                    </div>
                )}
            </div>
        )
    }
}
