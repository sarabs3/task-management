import React from 'react';

class TaskList extends React.Component {
    state = {
        tasks: [
            {title: "Task 1", deadline:"Monday"},
            {title: "Deliever the project", deadline:"Friday"},
            {title: "Sprint Planning", deadline:"Thursday"},
            {title: "Milestone", deadline:"Monday"},
            {title: "Stylesheet Add", deadline:"Monday"}
        ]
    }
    addTask = () => {
        const taskTitle = `Task ${this.state.tasks.length + 1}`;
        let tasks = this.state.tasks;
        tasks.push(({title:taskTitle, deadline: "Tuesday"}));
        this.setState(oldState => ({tasks: tasks}));
    }
    render () {
        return (
            <div className="page">
                <h1>Tasks</h1>
                <ul className="taskList">
                    <li>
                        <div className="taskList__list taskList__Header">
                            <div className="taskList__title">Title</div>
                            <div className="taskList__assign">
                                User
                            </div>
                            <div className="taskList__deadline">Deadline</div>
                        </div>
                    </li>
                    
                    {this.state.tasks.map(task =>
                        <li key={task.title}>
                            <div className="taskList__list">
                                <div className="taskList__title">{task.title}</div>
                                <div className="taskList__assign">
                                    <div className="image"></div>
                                </div>
                                <div className="taskList__deadline">
                                    <div className="data">{task.deadline}</div>
                                    <div className="actions">
                                        <span>+</span>
                                        <span>-</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                    <li>
                        <div className="taskList__list taskList__list--button">
                            <button onClick={this.addTask} className="taskList__add-button">Add New task</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
};

export default TaskList;