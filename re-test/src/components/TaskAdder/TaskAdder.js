import React, { Component } from 'react';
import classes from './TaskAdder.module.css';

import Button from 'react-bootstrap/Button';

export default class TaskAdder extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTask:''
        }
    }

    onChange = (e) => 
        { 
            this.setState({newTask:e.target.value})
        }

    handleKeyDown = (e) => 
        {
            if(e.key === 'Enter')
                {
                    this.props.add(this.state.newTask)
                    this.clearTask()
                }
        }

    clearTask = () => 
        {
            this.setState({newTask:''})
        }

    render(){
        return (
            <div className={classes.header}>
                <input 
                    type='text' 
                    value={ this.state.newTask } 
                    onChange={ (e)=>this.onChange(e) }
                    onKeyDown={this.handleKeyDown} 
                    placeholder='Add a new task'
                />
                <Button 
                    className={classes.butt}
                    variant="primary"
                    onClick={()=> 
                        {
                            this.props.add(this.state.newTask)
                            this.clearTask()
                        } }>
                    Add</Button>
            </div>
        )
    }
} 


