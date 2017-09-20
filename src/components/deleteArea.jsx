import React, { Component } from 'react';
// Material UI imports
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/delete';
// react dnd
import { ItemTypes } from '../constants/constants';
import { DropTarget } from 'react-dnd';
// firebase
import database, {User} from '../fire.js'

// deletes the dragged and drop task from the database on drop
const deleteTask = {
  drop(props, monitor, connect) {
    database.ref('users/' + User.user.uid).child(monitor.getItem().id).remove();
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export class DeleteArea extends Component {
  render() {
    const { connectDropTarget} = this.props;
    return connectDropTarget(
      <div>
        <RaisedButton
          className='delete'
          icon={<Delete/>}
          primary={true}
          disabled={true}
        />
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TASK, deleteTask, collect)(DeleteArea);
