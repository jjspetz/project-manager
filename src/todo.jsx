import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './todo.css';

const style = {
  marginBottom: 20,
};

// add drop functions (basic script won't work)

class Todo extends Component {
  render() {
    return (
      <div className='mainDisplay'>
        <Card className='card'>
          <CardTitle title="Uncompleted Tasks"/>
          <ol id='uTask' ondragover="allowDrop(event)" ondrop="drop(event)">
            <li draggable="true" ondragstart="drag(event)">Example 1</li>
            <li draggable="true" ondragstart="drag(event)">Example 2</li>
          </ol>
          <RaisedButton className='add' id='add' label='+Add' primary={true} style={style}/>
        </Card>

        <Card className='card'>
          <CardTitle title="Completed Tasks"/>
          <ol id='cTask' ondragover="allowDrop(event)" ondrop="drop(event)">
            <li draggable="true" ondragstart="drag(event)">Example 3</li>
            <li draggable="true" ondragstart="drag(event)">Example 4</li>
          </ol>
          <RaisedButton className='add' id='add' label='+Add' primary={true} style={style}/>
        </Card>
      </div>
    )
  };
}

export default Todo;
