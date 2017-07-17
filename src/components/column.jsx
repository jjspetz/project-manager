import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/remove';
import Task from './task';
import {connect} from 'react-redux';
import {addTask} from '../actions';
import {bindActionCreators} from 'redux';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      val: ''
    };
  }

  openInput = () => this.setState({open: true});
  closeInput = () => this.setState({open: false});

  addTask = (event) => {
    this.closeInput();
    this.props.addTask({task: this.state.val, column: this.props.title});
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

function mapStateToProps(state) {
  console.log(state.tasks);
  return {
    tasks: state.tasks,
    open: false,
    val: ''
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {addTask: addTask}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Column)
