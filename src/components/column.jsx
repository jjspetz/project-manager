import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/remove';
import Task from './task';
import {connect} from 'react-redux';
import {toggleInput} from '../actions';
import {bindActionCreators} from 'redux';
import database, {User} from '../fire.js'
// react dnd
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants/constants';
import { DropTarget } from 'react-dnd';

const dropTask = {
  drop(props) {
    // change column function or move function
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
  }

  toggleInput = () => {
    this.props.toggleInput(this.props.openInput === this.props.title ? '' : this.props.title);
  }

  addTask = (event) => {
    database.ref('users/' + User.user.uid).push({
      column: this.props.title,
      task: this.state.val
    });
    event.preventDefault();
  }

  add(event, key) {
      this.setState({[key]: event.target.value})
    }

  render() {
    const { connectDropTarget, isOver } = this.props;
    // need to add connectDropTarget
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

        {this.props.openInput === this.props.title ?
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
  return {
    tasks: state.tasks,
    openInput: state.openInput,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleInput: toggleInput
    }, dispatch
  )
}

Column.propTypes = {
  isOver: PropTypes.bool.isRequired
};

Column = DropTarget(ItemTypes.TASK, dropTask, collect)(Column)
export default connect(mapStateToProps, mapDispatchToProps)(Column)
