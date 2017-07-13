import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './todo.css';


// add drop functions (basic script won't work)

class Todo extends Component {
  render() {
    return (
      <div className='mainDisplay'>
        <Card className='card'>
          <CardTitle title="Uncompleted Tasks"/>
          <ol id='uTask'>
            <li>Example 1</li>
            <li>Example 2</li>
          </ol>
        </Card>

        <Card className='card'>
          <CardTitle title="Tasks in Progress"/>
          <ol id='중Task'>
            <li>Example 5</li>
          </ol>
        </Card>

        <Card className='card'>
          <CardTitle title="Completed Tasks"/>
          <ol id='cTask'>
            <li>Example 3</li>
            <li>Example 4</li>
          </ol>
        </Card>
      </div>
    )
  };
}

export default Todo;
