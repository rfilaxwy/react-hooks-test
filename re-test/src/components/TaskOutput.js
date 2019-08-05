import React from 'react';

import NewTask from './NewTask';

const TaskOutput = (props) => {
    const { list, deleteTask} = props;
    
    let taskOutput = list.map((task, index) => {
        console.log(index)
        return <NewTask index={ index} key={ index }  taskName={ task } deleteTask={ deleteTask } />
    })
    return taskOutput;
}

export default TaskOutput;