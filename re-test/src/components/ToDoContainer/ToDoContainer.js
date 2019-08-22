import React, { Component } from 'react';
import TaskAdder  from '../TaskAdder/TaskAdder';
import TaskList from '../TaskList/TaskList';


import classes from './ToDoContainer.module.css'

 class ToDoContainer extends Component{
    constructor(){
        super();
        this.state = {
            tasks: [
                {
                    task:'laundry',
                    id:'2019-08-12',
                    complete: false
                }, 
                {
                    task:'dishes',
                    id:'2018-08-11',
                    complete: false
                }
            ],
        }
    }
    
    handleNewTask = (e) => {
        let { tasks } = this.state;
        let timeStamp = Date.now();
        let pushTask ={task:e, id:timeStamp, complete:false}
        tasks.push(pushTask);
        this.setState({ tasks: tasks })
    }

    completeTask = (id) => {
        let tasks = [...this.state.tasks];
        let taskIndex = tasks.findIndex(t=>{
            return t.id === id
        }
            );
        tasks[taskIndex].complete = !tasks[taskIndex].complete;
        this.setState({tasks:tasks})
    }
    
    deleteTaskHandler = (ind) => {
        let tasks = [...this.state.tasks];
        let delIndex = tasks.findIndex((i)=>{
            return i.id === ind
        });
        tasks.splice(delIndex,1);
        this.setState({tasks:tasks})
    }

    render(){
        
        let tasks =this.state.tasks;
        let totalTasks = this.state.tasks.length;
        let completeTasks = tasks.filter(task => task.complete).length;
        return(
            
            <div className={classes.TodoCont}>
                <TaskAdder 
                    add = { this.handleNewTask }
                />
                <TaskList
                    tasks={this.state.tasks}
                    completeTask={this.completeTask}
                    click={this.deleteTaskHandler}
                />
                <div className={classes.foot}>
                    <p>Total Tasks: {totalTasks}</p>
                    <p>Complete Tasks: {completeTasks}</p>
                </div>
            </div>
            
        )
    }
}
export default ToDoContainer;