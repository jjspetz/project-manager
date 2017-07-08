import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './todo.css';


class Todo extends Component {
  render() {
    return (
      <div>
        <h3>Uncompleted Tasks</h3>
        <ol id='uTask' ondragover="allowDrop(event)" ondrop="drop(event)">
          <li>need to add</li>
          <div className='add' id='add'>+ Add</div>
        </ol>

        <h3>Completed Tasks</h3>
        <ol id='cTask' ondragover="allowDrop(event)" ondrop="drop(event)">
          <li>need to add</li>
          <div className='add' id='add'>+ Add</div>
        </ol>
      </div>
    )
  };
}

export default Todo;
