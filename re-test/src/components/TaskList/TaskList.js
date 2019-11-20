import React from "react";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import NewTask from "../NewTask/NewTask";

const TaskList = props => {
  let { tasks } = props;
  let tasksToShow;
  if (tasks.length > 0) {
    tasksToShow = tasks.map(t => {
      return (
        <ErrorBoundry key={t.id}>
          <NewTask
            ind={t.id}
            taskName={t.task}
            complete={t.complete}
            completeTask={() => props.completeTask(t.id)}
            click={() => props.click(t.id)}
          />
        </ErrorBoundry>
      );
    });
  } else {
    tasksToShow = null;
  }
  return tasksToShow;
};

export default TaskList;
