import React, {Component} from 'react';
import './task.pcss';

export class Task extends Component {
    render() {
        return (
            <div className="task">
                <label className="task__checkbox checkbox checkbox--without-text">
                    <input type="checkbox" className="checkbox__input"/>
                    <i className="material-icons checkbox__icon checkbox__icon--unchecked">radio_button_unchecked</i>
                    <i className="material-icons checkbox__icon checkbox__icon--checked">check_circle</i>
                </label>
                <div className="task__body">
                    <div className="task__title">Task 1</div>
                    <div className="task__actions task-actions">
                        <div className="task-actions__item task-action task-action--edit">
                            <i className="material-icons">mode_edit</i>
                        </div>
                        <div className="task-actions__item task-action task-action--delete">
                            <i className="material-icons">delete_forever</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
