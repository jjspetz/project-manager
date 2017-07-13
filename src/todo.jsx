import React, { Component } from 'react';
import Column from './column';
import {Card, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './todo.css';


// add drop functions (basic script won't work)

class Todo extends Component {
  render() {
    return (
      <div className='mainDisplay'>
        <Column title='Uncompleted' tasks={['eat', 'sleep', 'code']} />
      </div>
    )
  };
}

export default Todo;
