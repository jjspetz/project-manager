import React, { Component } from 'react';
// Material UI imports
import {Card, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Task from './task';
import {connect} from 'react-redux';
import {toggleInput} from '../actions';
import {bindActionCreators} from 'redux';
import database, {User} from '../fire.js'
// react dnd
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants/constants';
import { DropTarget } from 'react-dnd';

// tells the dragged element what to do when being dropped
const dropTask = {
  drop(props, monitor, connect) {
    // rewrites db entry to now render in the new container
    database.ref('users/' + User.user.uid).child(monitor.getItem().id).set({
      column: connect.props.title,
      task: monitor.getItem().id,
      project: props.currentProject || {},
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

  // opens the input for each column
  toggleInput = () => {
    this.props.toggleInput(this.props.openInput === this.props.title ? '' : this.props.title);
  }

  // allows user to add task to the colum via adding it to the database
  addTask = (event) => {
    // checks to make sure the user wrote something
    if (this.state.val) {
      // writes in database
      database.ref('users/' + User.user.uid).child(this.state.val).set({
        column: this.props.title,
        task: this.state.val,
        project: this.props.currentProject || {},
      });
      // closes input
      this.props.toggleInput('');
      // resets input to blank string
      this.setState({val: ''});
    }
    event.preventDefault();
  }

  // displays the input typing in real time as user types
  add(event, key) {
      this.setState({[key]: event.target.value})
    }

  render() {
    const { connectDropTarget} = this.props;
    return connectDropTarget(
      <div className='flex-container'>
      <Card className='card'>
        <CardTitle title={this.props.title}/>
        <ol id={this.props.title}>
        {this.props.tasks ? Object.values(this.props.tasks).map((task) =>
          task.column === this.props.title && task.project === this.props.currentProject
          ? <Task key={task.task} task={task}/>
          : null) : null}
        </ol>
        <div className='lowerCard'>
          <FloatingActionButton onTouchTap={this.toggleInput} mini={true} className='add'>
            <ContentAdd />
          </FloatingActionButton>

          {this.props.openInput === this.props.title ?
          <form className='cardInput'>
            <TextField
              hintText="Enter a task"
              value={this.state.val}
              onChange={event => this.add(event, 'val')}
            />
            <RaisedButton label="Submit" primary={true}
              onTouchTap={(event)=> this.addTask(event)}/>
          </form>
          : null}
        </div>
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
