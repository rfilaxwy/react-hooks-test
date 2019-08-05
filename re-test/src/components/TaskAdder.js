import React, { Component } from 'react';
import './TaskAdder.css';

export default class TaskAdder extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTask:''
        }
    }

    handleInput = (val) => {
        
        this.setState({newTask:val})
    }

    clearTask = () => {
        this.setState({newTask:''})
    }

    render(){
       
        return (
            <div>
                <input type='text' value={ this.state.newTask } onChange={(e)=>this.handleInput(e.target.value)} placeholder='Add new task'></input>
                <button 
                    onClick={()=>{
                        this.props.add(this.state.newTask)
                        this.clearTask()
                    } }>Add Task</button>
                
            </div>
        )
    }
} 


