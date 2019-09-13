import React, { Component } from 'react';
import TaskAdder  from '../TaskAdder/TaskAdder';
import TaskList from '../TaskList/TaskList';
import TaskStatusBar from '../TaskStatusBar/TaskStatusBar';
import Button from 'react-bootstrap/Button';


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
            display:'c'
        }
    }
    
    handleNewTask = (e) => {
        let { tasks } = this.state;
        let timeStamp = Date.now();
        let pushTask ={task:e, id:timeStamp, complete:false}
        tasks.push(pushTask);
        this.setState({ tasks: tasks })
    }

    handleDisplay = (e) => {
        this.setState({display:e})
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
        let completeTasks = tasks.filter(task => task.complete);
        let displayTasks = this.state.display === 'a' ? tasks.filter(task => task.complete===false): this.state.display === 'b' ? completeTasks: this.state.display ==='c' ? tasks: null;
        let totalTasks = this.state.tasks.length;
        
        return(
            <div className={classes.TodoCont}>
                
                <TaskAdder 
                    add = { this.handleNewTask }
                />
                <TaskList
                    tasks={displayTasks}
                    completeTask={this.completeTask}
                    click={this.deleteTaskHandler}
                />
                <TaskStatusBar
                    totalTasks={totalTasks}
                    completeTasks={completeTasks.length}
                />
                <Button className={classes.button} onClick={()=>this.handleDisplay('a')}>Show Active</Button>
                <Button className={classes.button} onClick={()=>this.handleDisplay('b')}>Show Complete</Button>
                <Button className={classes.button} onClick={()=>this.handleDisplay('c')}>Show All</Button>

            </div>
            
        )
    }
}
export default ToDoContainer;