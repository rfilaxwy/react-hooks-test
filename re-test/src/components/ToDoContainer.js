import React, { Component } from 'react';
import TaskAdder  from './TaskAdder';
import './ToDoContainer.css'

import TaskOutput from './TaskOutput';


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

    // DELETE FUNCTION NOT WORKING
    // deleteTask = (ind) => {
    //     let { tasks } = this.state;
    //     console.log(tasks)
    //     let newTasks = tasks.splice(ind-1,1);
    //     this.setState({tasks:newTasks})
    // }

    render(){

        return(
            <div className='TodoCont'>
                <TaskAdder 
                    add = { this.handleNewTask }
                />
                <TaskOutput 
                    list={ this.state.tasks }
                    // deleteTask={ this.deleteTask }
                />
            </div>
        )
    }
}