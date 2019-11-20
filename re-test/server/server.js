const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  path = require("path"),
  axios = require("axios"),
  fs = require("fs");

require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//refactor into routes anc controllers
const weahterUrl = process.env.WEATHER_API;
//Fix so process.env works
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=791d12d76f7b90c88f22e59b85f4ac1d`;
app.get("/api/weather", (req, res) => {
  getWeather().then(response => res.status(200).send(response));
});

const getWeather = async () => {
  try {
    let weatherData = await axios.get(weatherUrl);
    let { data } = weatherData;
    return data;
  } catch (err) {
    res.send(err);
  }
};

//user tasks
//refactor into routes and controllers
//move data to db

const tasks = JSON.parse(
  fs.readFileSync(`${__dirname}/../dummy-data/tasks.json`)
);
app.get("/api/user", (req, res) => {
  res.status(200).send(tasks);
});

app.post("/api/user", (req, res) => {
  const newTask = Object.assign(req.body);
  tasks.push(newTask);
  fs.writeFile(
    `${__dirname}/../dummy-data/tasks.json`,
    JSON.stringify(tasks),
    err => {
      res.status(201).json({
        status: "success",
        data: {
          tasks
        }
      });
    }
  );
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
