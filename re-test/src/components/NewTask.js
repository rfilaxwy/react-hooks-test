import React from 'react';
import './NewTask.css';

const NewTask = (props) => {
    
    let taskCompleteStyle =
    {
        textDecoration: "line-through"
    }
    return(
        <div className='taskRow'>
            <input type="checkbox" checked={props.complete}/> <p style={taskCompleteStyle}>{props.taskName}</p>
            <button onClick={props.click}>Delete task</button>
        </div>
    )
}

export default NewTask;