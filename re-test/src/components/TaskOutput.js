import React from 'react';

import NewTask from './NewTask';

const TaskOutput = (props) => {
    const { list } = props;
    
    let taskOutput = list.map((task, index) => {
        return <NewTask 
                    index={ index} 
                    key={ index }  
                    taskName={ task } 
                    // deleteTask={ deleteTask } 
                    />
    })
    return taskOutput;
}

export default TaskOutput;