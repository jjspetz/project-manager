/*
*  A React component That is a child of column.jsx.
*   It redners the <li> that holds the task information and sets them  up to
*   be dragable.
*/

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants/constants.js';
import { DragSource } from 'react-dnd';

// puts important information into the element being dragged when it starts being dragged
const taskSource = {
  beginDrag(props) {
    return {
      id: props.task.task,
      column: props.task.column
    };
  }
};

const style = {
  width: '92%',
  padding: 10,
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Task extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
        <Paper style={style} zDepth={1} >
          <li key={this.props.task.task} style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move'
          }}>
            {this.props.task.task}
          </li>
        </Paper>
      </div>
    );
  }
}

Task.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TASK, taskSource, collect)(Task);
