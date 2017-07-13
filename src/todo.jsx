import React, { Component } from 'react';
import Column from './column';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './todo.css';


// add drop functions (basic script won't work)

class Todo extends Component {
  render() {
    return (
      <div className='mainDisplay'>
        <AppBar
          title="TODO APP"
          iconElementRight={<FlatButton label="+ Add" />}
        />
        <div className='flex-container'>
          <Column title='Uncompleted' tasks={['eat', 'sleep', 'code']} />
          <Column title='Completed' tasks={[]} />
        </div>
      </div>
    )
  };
}

export default Todo;
