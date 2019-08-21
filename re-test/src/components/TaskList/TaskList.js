import React from 'react';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import NewTask from '../NewTask/NewTask';

const TaskList = (props) => {
    console.log(props)
    let { tasks } = props;
    let tasksToShow = tasks.map((t) => {
        return(
            <ErrorBoundry key={t.id}>
                <NewTask 
                    ind={t.id}
                    taskName={t.task}
                    complete={t.complete}
                    completeTask={()=>props.completeTask(t.id)}
                    click={()=>props.click(t.id)}
                    />
            </ErrorBoundry>
        )
    })
    return tasksToShow
}

export default TaskList