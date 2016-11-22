import React, {Component} from 'react';
import {Task} from './task';
import './task-list.pcss';

export class TaskList extends Component {
    constructor() {
        super();
        this.tasks = [
            {name: 'Task 1', complete: false},
            {name: 'Task 2', complete: false},
            {name: 'Task 3', complete: true},
        ]
    }

    render() {
        return (
            <div className="task-list">
                {this.tasks.map((item, index) => <div key={index} className="task-list__item"><Task/></div>)}
            </div>
        )
    }
}
