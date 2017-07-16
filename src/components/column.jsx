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
      tasks: props.tasks,
      val: ''
    };
  }

  openInput = () => this.setState({open: true});
  closeInput = () => this.setState({open: false});

  addTask = (event) => {
    this.closeInput();
    this.state.tasks.push({name: this.state.val, column: this.props.title});
    console.log(this.state.tasks);
    this.setState({tasks: 'works'});
    event.preventDefault();
  }

  add(event, key) {
    this.setState({[key]: event.target.value})
  }

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
        <FloatingActionButton onTouchTap={this.openInput} mini={true} className='add button'>
          <ContentAdd />
        </FloatingActionButton>

        {this.state.open ?
        <form className='input' onSubmit={event => this.addTask(event)}>
          <input type='text'
            value={this.state.val}
            onChange={event => this.add(event, 'val')} />
          <input type='submit' value='Submit'/>
        </form>
        : null}

      </Card>
    );
  }
}

export default Column
