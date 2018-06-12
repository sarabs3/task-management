import React from 'react';

class TaskList extends React.Component {
    state = {
        tasks: [
            {title: "Task 1", deadline:"Monday"},
            {title: "Deliever the project", deadline:"Friday"}
        ],
        addTask: false,
        taskValue: ''
    }
    handleInput = (key, value) => {
        this.setState(oldState => ({[key]:value}))
    }
    addTask = () => {
        const taskTitle = `Task ${this.state.tasks.length + 1}`;
        let tasks = this.state.tasks;
        tasks.push(({title:this.state.taskValue, deadline: new Date().getDate()}));
        this.setState(oldState => ({tasks, addTask: false, taskValue: ''}));
    }
    handleAdd = () => {
        this.setState(oldState => ({addTask: true}))
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
                    
                    {this.state.addTask && <li>
                        <div className="taskList__list taskList__Add-task">
                            <div className="taskList__title">
                                <form onSubmit={this.addTask}>
                                    <input placeholder="title" value={this.state.taskValue} onChange={e => this.handleInput('taskValue', e.target.value)} />
                                </form>
                            </div>
                        </div>
                    </li>}
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
                            <button onClick={this.handleAdd} className="taskList__add-button">Add New task</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
};

export default TaskList;