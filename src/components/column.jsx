import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/remove';
import Task from './task';
import {connect} from 'react-redux';

class Column extends Component {

  openInput = () => this.setState({open: true});
  closeInput = () => this.setState({open: false});

  addTask = (event) => {
    this.closeInput();
    this.state.tasks.push({task: this.state.val, column: this.props.title});
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
          <Task task={task.task} />
          : null)}
        </ol>
        <FloatingActionButton mini={true} className='minus button'>
          <ContentMinus />
        </FloatingActionButton>
        <FloatingActionButton onTouchTap={this.openInput} mini={true} className='add button'>
          <ContentAdd />
        </FloatingActionButton>

        {this.props.open ?
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

function mapStateToProps(state) {
  console.log(state.tasks);
  return {
    tasks: state.tasks,
    open: false,
    val: ''
  };
}

export default connect(mapStateToProps)(Column)
