import React from 'react';
import './NewTask.css';

const NewTask = (props) => {
    
    return(
        <div className='taskRow'>
            <input type="checkbox"/>{props.taskName}
            <button onClick={props.click}>Delete task</button>
        </div>
    )
}

export default NewTask;