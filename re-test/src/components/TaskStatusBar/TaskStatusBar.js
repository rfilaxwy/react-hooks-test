import React from 'react'
import classes from '../ToDoContainer/ToDoContainer.module.css'

const TaskStatusBar = (props) => {
    return(
        <div className={classes.foot}>
                <p>Total Tasks: {props.totalTasks}</p>
                <p>Complete Tasks: {props.completeTasks}</p>
                <p>Active Tasks: {props.totalTasks- props.completeTasks}</p>
        </div>
    )
}
export default TaskStatusBar;