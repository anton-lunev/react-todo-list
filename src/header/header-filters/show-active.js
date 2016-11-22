import React, {Component} from 'react';
import './show-active.pcss';

export class ShowActiveFilter extends Component {
    render() {
        return (
            <div className="checkbox-field">
                <label className="checkbox-field__label">
                    <input className="checkbox-field__input" type="checkbox"/>
                    <i className="material-icons checkbox-field__icon checkbox-field__icon--unchecked">
                        check_box_outline_blank
                    </i>
                    <i className="material-icons checkbox-field__icon checkbox-field__icon--checked">
                        check_box
                    </i>
                    Show active
                </label>
            </div>
        )
    }
}
