import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/remove';
import Task from './task';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tasks: props.tasks
    };
  }

  openInput = () => this.setState({open: true});
  closeInput = () => this.setState({open: false});

  addTask = () => {
    this.state.tasks.push({name: this.state.val, column: this.state.title});
    console.log(this.state.tasks);
    this.setState({tasks: 'works'});
  }

  render() {
    return (
      <Card className='card'>
        <CardTitle title={this.props.title}/>
        <ol id={this.props.title}>
          {this.state.tasks.map((task) =>
            task.column === this.props.title ?
            <Task task={task.name} />
            : null)}
        </ol>
        <FloatingActionButton mini={true} className='minus button'>
          <ContentMinus />
        </FloatingActionButton>
        <FloatingActionButton onTouchTap={this.openInput} mini={true} className='add button'>
          <ContentAdd />
        </FloatingActionButton>

        {this.state.open ?
        <form className='input'>
          <input type='text' value={this.state.val} />
          <input type='submit' value='Submit' onTouchTap={this.addTask} />
        </form>
        : null}

      </Card>
    );
  }
}

export default Column
