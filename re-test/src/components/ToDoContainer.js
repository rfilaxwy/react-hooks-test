import React, { Component } from 'react';
import TaskAdder  from './TaskAdder';
import './ToDoContainer.css'
import NewTask from './NewTask';



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

    
    deleteTaskHandler = (ind) => {
        let tasks= this.state.tasks;
        tasks.splice(ind,1);
        this.setState({tasks:tasks})
    }

    render(){
        let tasksToShow = this.state.tasks.map((task, index) => {
            return(
                <NewTask 
                    taskName={task}
                    click={()=>this.deleteTaskHandler(index)}
                    />
            )
        })
        return(
            <div className='TodoCont'>
                <TaskAdder 
                    add = { this.handleNewTask }
                />
                {tasksToShow}
            </div>
        )
    }
}