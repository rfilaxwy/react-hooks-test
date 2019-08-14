import React, { Component } from 'react';
import TaskAdder  from './TaskAdder';
import './ToDoContainer.css'
import NewTask from './NewTask';



export default class ToDoContainer extends Component{
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
        let pushTask ={task:e, id:timeStamp}
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
        tasks.splice(ind,1);
        this.setState({tasks:tasks})
    }

    render(){
        let tasksToShow = this.state.tasks.map((t) => {
            return(
                <NewTask 
                    key={t.id}
                    taskName={t.task}
                    complete={t.complete}
                    completeTask={()=>this.completeTask(t.id)}
                    click={()=>this.deleteTaskHandler(t.id)}
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