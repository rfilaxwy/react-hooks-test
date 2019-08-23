import React from 'react';
import classes from './App.module.css';
import ToDoContainer from './components/ToDoContainer/ToDoContainer';
import WeatherContainter from './components/WeatherContainer/WeatherContainer';


function App() {
  return (
    <div className={classes.App}>
      <WeatherContainter 
        className={classes.weatherBar}
        />
      <h1>todo</h1>
        <ToDoContainer/>
    </div>
  );
}

export default App;
