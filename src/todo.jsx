import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import './todo.css';


class Todo extends Component {
  render() {
    return (
      <div className='mainDisplay'>
        <Card className='card'>
          <CardTitle title="Uncompleted Tasks"/>
          <ol id='uTask' ondragover="allowDrop(event)" ondrop="drop(event)">
            <li>need to add</li>
            <div className='add' id='add'>+ Add</div>
          </ol>
        </Card>

        <Card className='card'>
          <CardTitle title="Completed Tasks"/>
          <ol id='cTask' ondragover="allowDrop(event)" ondrop="drop(event)">
            <li>need to add</li>
            <div className='add' id='add'>+ Add</div>
          </ol>
        </Card>
      </div>
    )
  };
}

export default Todo;
