import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/remove';
import Task from './task';

class Column extends Component {
  render() {
    return (
      <Card className='card'>
        <CardTitle title={this.props.title}/>
        <ol id={this.props.title}>
          {this.props.tasks.map((task) =>
            task.column === this.props.title ?
            <Task task={task.name} />
            : null)}
        </ol>
        <FloatingActionButton mini={true} className='minus button'>
          <ContentMinus />
        </FloatingActionButton>
        <FloatingActionButton mini={true} className='add button'>
          <ContentAdd />
        </FloatingActionButton>
      </Card>
    );
  }
}

export default Column
