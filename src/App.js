import React, {Component} from 'react';
import {Header} from './header';
import {ProgressBar} from './progress-bar';
import {AddCategory} from './add-category';
import {CategoryList} from './category-list'
import {TaskList} from './task-list'
import './App.pcss';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ProgressBar/>
                <div className="main container">
                    <div className="sidebar">
                        <AddCategory/>
                        <CategoryList/>
                    </div>
                    <div className="content">
                        <div className="content__header">
                            <h2 className="category-title">
                                Category 1
                            </h2>
                            <div className="add-task">
                                <button type="submit" className="btn-round btn-round--outline add-task__button">
                                    Add Task
                                </button>
                            </div>
                        </div>
                        <div className="content__body">
                            <TaskList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
