import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import Task from './task';

class Column extends Component {

  render() {
    return (
      <Card className='card'>
        <CardTitle title={this.props.title}/>
        <ol id={this.props.title}>
          {this.props.tasks.map((task) =>
            <Task task={task} />
          )}
        </ol>
      </Card>
    );
  }
}

export default Column
