import React, {Component} from 'react';
import './progress-bar.pcss';

export class ProgressBar extends Component {
    render() {
        return (
            <div className="progress-bar" style={{width: '30%'}}></div>
        )
    }
}
