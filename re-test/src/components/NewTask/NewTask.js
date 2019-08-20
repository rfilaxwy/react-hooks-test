import React from 'react';
import styles from   './NewTask.module.css';
import { FaTimes, FaCheck } from 'react-icons/fa';

const NewTask = (props) => {
    
    let taskCompleteStyle = {textDecoration: "line-through", color:'rgb(222,222,222)'};
    let taskOutput = props.complete ? <p className={styles.task} style={taskCompleteStyle}>{props.taskName}</p>: <p className={styles.task}>{props.taskName}</p>
    let checkBox = props.complete ? <div className={styles.checkBlock} onClick={()=>props.completeTask(props.id)}><FaCheck /></div>:<div className={styles.checkBlock} type="checkbox" onClick={()=>props.completeTask(props.id)}/>
    return(
        <div className={styles.taskRow}>
             {checkBox}{taskOutput}
            <FaTimes className={styles.FaTimes} onClick={()=>props.click(props.ind)} />
        </div>
    )
}

export default NewTask;