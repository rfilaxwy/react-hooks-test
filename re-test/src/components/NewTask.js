import React from 'react';
import './NewTask.css';

const NewTask = (props) => {
    
    let taskCompleteStyle = {textDecoration: "line-through"};
    let taskOutput = props.complete ? <p style={taskCompleteStyle}>{props.taskName}</p>: <p>{props.taskName}</p>
    return(
        <div className='taskRow'>
            <input type="checkbox" onChange={()=>props.completeTask(props.id)}/> {taskOutput}
            <button onClick={props.click}>Delete task</button>
        </div>
    )
}

export default NewTask;