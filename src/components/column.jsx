import React, { Component } from 'react';
// Material UI imports
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
  drop(props, monitor, connect) {
    // rewrites db entry to now render in the new container
    database.ref('users/' + User.user.uid).child(monitor.getItem().id).set({
      column: connect.props.title,
      task: monitor.getItem().id,
      project: this.props.currentProject,
    });
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
    // writes in database
    database.ref('users/' + User.user.uid).child(this.state.val).set({
      column: this.props.title,
      task: this.state.val,
      project: this.props.currentProject,
    });
    // closes input
    this.props.toggleInput('');
    // resets input to blank string
    this.setState({val: ''});
    event.preventDefault();
  }

  add(event, key) {
      this.setState({[key]: event.target.value})
    }

  render() {
    const { connectDropTarget} = this.props;
    return connectDropTarget(
      <div className='card'>
      <Card className='card'>
        <CardTitle title={this.props.title}/>
        <ol id={this.props.title}>
        {this.props.tasks ? Object.values(this.props.tasks).map((task) =>
          task.column === this.props.title && task.project === this.props.currentProject
          ? <Task key={task.task} task={task}/>
          : null) : null}
        </ol>
        <FloatingActionButton onTouchTap={this.toggleInput} mini={true} className='add'>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    openInput: state.openInput,
    currentProject: state.currentProject,
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
  isOver: PropTypes.bool.isRequired,
  place: PropTypes.number
};

Column = DropTarget(ItemTypes.TASK, dropTask, collect)(Column)
export default connect(mapStateToProps, mapDispatchToProps)(Column)
