import React from 'react';
import './NewTask.css';

const NewTask = (props) => {
    console.log(props)
    return(
        <div className='taskRow'>
            <input type="checkbox"></input>{props.taskName}
            <button onClick={()=>props.delete}>Delete task</button>
        </div>
    )
}

export default NewTask;