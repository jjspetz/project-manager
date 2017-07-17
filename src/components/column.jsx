import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/remove';
import Task from './task';
import {connect} from 'react-redux';
import {toggleInput} from '../actions';
import {bindActionCreators} from 'redux';
import database from '../fire.js'

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      val: ''
    };
  }

  toggleInput = () => {
    this.props.toggleInput(!this.props.openInput);
  }

  addTask = (event) => {
    this.closeInput();
    database.ref('DigitalCrafts').push({
      column: this.props.title,
      task: this.state.val
    });
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
        {Object.values(this.props.tasks).map((task) =>
          task.column === this.props.title ?
          <Task task={task.task} />
          : null)}
        </ol>
        <FloatingActionButton mini={true} className='minus button'>
          <ContentMinus />
        </FloatingActionButton>
        <FloatingActionButton onTouchTap={this.toggleInput} mini={true} className='add button'>
          <ContentAdd />
        </FloatingActionButton>

        {this.props.openInput ?
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
  console.log(state.openInput);
  return {
    tasks: state.tasks,
    openInput: state.openInput,
    val: ''
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {toggleInput: toggleInput}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Column)
