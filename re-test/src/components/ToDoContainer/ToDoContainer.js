import React, { Component } from "react";
import TaskAdder from "../TaskAdder/TaskAdder";
import TaskList from "../TaskList/TaskList";
import TaskStatusBar from "../TaskStatusBar/TaskStatusBar";
import Button from "react-bootstrap/Button";

import axios from "axios";

import classes from "./ToDoContainer.module.css";

class ToDoContainer extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: "laundry",
          id: "2019-08-12",
          complete: false
        },
        {
          task: "dishes",
          id: "2018-08-11",
          complete: false
        }
      ],
      display: "c"
    };
  }

  getTasks = () => {
    axios.get("/api/user").then(res => {
      const tasks = Object.assign(res.data);
      this.setState({ tasks: tasks });
    });
  };
  componentDidMount() {
    this.getTasks();
  }

  handleNewTask = e => {
    // let { tasks } = this.state;
    let timeStamp = Date.now();
    let pushTask = { task: e, id: timeStamp, complete: false };
    axios.post("/api/user", pushTask).then(res => {
      this.getTasks();
    });
  };

  handleDisplay = e => {
    this.setState({ display: e });
  };

  completeTask = id => {
    let tasks = [...this.state.tasks];
    let taskIndex = tasks.findIndex(t => {
      return t.id === id;
    });
    tasks[taskIndex].complete = !tasks[taskIndex].complete;
    this.setState({ tasks: tasks });
  };

  deleteTaskHandler = ind => {
    let tasks = [...this.state.tasks];
    let delIndex = tasks.findIndex(i => {
      return i.id === ind;
    });
    tasks.splice(delIndex, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    let tasks = this.state.tasks;
    let completeTasks =
      tasks.length > 0 ? tasks.filter(task => task.complete) : 0;
    let displayTasks =
      this.state.display === "a"
        ? tasks.filter(task => task.complete === false)
        : this.state.display === "b"
        ? completeTasks
        : this.state.display === "c"
        ? tasks
        : null;
    let totalTasks = this.state.tasks.length;

    return (
      <div className={classes.TodoCont}>
        <TaskAdder add={this.handleNewTask} />
        <div className={classes.list}>
          <TaskList
            tasks={displayTasks}
            completeTask={this.completeTask}
            click={this.deleteTaskHandler}
          />
        </div>

        <TaskStatusBar
          totalTasks={totalTasks}
          completeTasks={completeTasks.length}
        />
        <div className="{buttonBox}">
          <Button
            className={classes.button}
            onClick={() => this.handleDisplay("a")}
          >
            Show Active
          </Button>
          <Button
            className={classes.button}
            onClick={() => this.handleDisplay("b")}
          >
            Show Complete
          </Button>
          <Button
            className={classes.button}
            onClick={() => this.handleDisplay("c")}
          >
            Show All
          </Button>
        </div>
      </div>
    );
  }
}
export default ToDoContainer;
