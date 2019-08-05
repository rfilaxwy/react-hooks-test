import React from 'react';
import './NewTask.css';

const NewTask = (props) => {
    
    return(
        <div className='taskRow'>
            <input type="checkbox"></input>{props.taskName}
            {/* <button onClick={()=>{props.deleteTask(props.index)}}>Delete task</button> */}
        </div>
    )
}

export default NewTask;