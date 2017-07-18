import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants/constants.js';
import { DragSource } from 'react-dnd';

// class Task extends Component {
//
//   render() {
//     return (
//       <li key={this.props.task} draggable='true' >{this.props.task}</li>
//     );
//   }
// }
//
// export default Task


const taskSource = {
  beginDrag(props) {
    return {};
  }
};

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
      <li key={this.props.task} style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}>
        {this.props.task}
      </li>
    );
  }
}

Task.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TASK, taskSource, collect)(Task);
