import React from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium'
import ToDoContainer from './components/ToDoContainer'

function App() {
  return (
    <StyleRoot>
    <div className="App">
      <h1>todo</h1>
        <ToDoContainer/>
    </div>
    </StyleRoot>
  );
}

export default Radium(App);
