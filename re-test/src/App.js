import React from 'react';
import classes from './App.module.css';
import ToDoContainer from './components/ToDoContainer'

function App() {
  return (
    <div className={classes.App}>
      <h1>todo</h1>
        <ToDoContainer/>
    </div>
  );
}

export default App;
