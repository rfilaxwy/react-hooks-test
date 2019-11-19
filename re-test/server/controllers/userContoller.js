const fs = require("fs");
const userTasks = JSON.parse(
  fs.readFileSync(`${__dirname}/../../dummy-data/tasks.json`)
);

exports.checkTaskId = (req, res, next, val) => {
  console.log(`Task is is ${val}`);
  if (req.params.id * 1 > userTasks.length) {
    return res.status(404).json({
      status: "fail",
      message: "no task by that id"
    });
  }
  next();
};

//Check if a task is to be updated-id exists and there is an update || don't do anything
exports.checkTaskBody((req, res, next) => {
  if (!req.body.id || !req.body.taskUpdate) {
    return res.status(400).json({
      status: "fail",
      message: "Missing id or update"
    });
  }
  next();
});

exports.getAllTasks = (req, res, next, val) => {
  res.status(200).json({
    status: "success",
    data: {
      userTasks
    }
  });
};

exports.createTask = (req, res) => {
  const newId = userTasks[userTasks.length - 1].id + 1;
  const newTask = Object.assign({ id: newId }, req.body);
  userTasks.push(newTask);
  fs.writeFile(
    `${__dirname}/../../dummy-data/tasks.json`,
    JSON.stringify(userTasks),
    err => {
      res.status(201).json({
        status: "success",
        data: {
          task: newTask
        }
      });
    }
  );
};
