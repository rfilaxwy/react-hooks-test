import React, { Component } from 'react';
import TaskAdder  from './TaskAdder';
import './ToDoContainer.css'

import NewTask from './NewTask'

export default class ToDoContainer extends Component{
    constructor(){
        super();
        this.state = {
            tasks: ['laundry', 'dishes'],
        }
    }
    
    handleNewTask = (e) => {
        let { tasks } = this.state;
        tasks.push(e);
        this.setState({ tasks: tasks })
    }

    deleteTask = (key) => {
        let { tasks } = this.state;
        let index = tasks.indexOf(key);
        let newTasks = tasks.splice(index-1,1);
        
        this.setState({tasks:newTasks})
    }

    render(){
        const { tasks } = this.state;
        let taskOutput = tasks.map((task, index)=> <NewTask key={index.toString()} taskName={task} delete={this.deleteTask(index)}/>)
        console.log(taskOutput)
        return(
            <div className='TodoCont'>
                <TaskAdder 
                    add = {this.handleNewTask}
                />
                { taskOutput }
            </div>
        )
    }
}