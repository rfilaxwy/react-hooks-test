import React from 'react';
import './NewTask.css';
import { FaTimes, FaCheck } from 'react-icons/fa';

const NewTask = (props) => {
    
    let taskCompleteStyle = {textDecoration: "line-through"};
    let taskOutput = props.complete ? <p style={taskCompleteStyle}>{props.taskName}</p>: <p>{props.taskName}</p>
    let checkBox = props.complete ? <div className='checkBlock' onClick={()=>props.completeTask(props.id)}><FaCheck /></div>:<div className='checkBlock' type="checkbox" onClick={()=>props.completeTask(props.id)}/>
    return(
        <div className='taskRow'>
             {checkBox}{taskOutput}
            <FaTimes className='FaTimes' onClick={()=>props.click(props.ind)} />
        </div>
    )
}

export default NewTask;