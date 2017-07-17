import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Delete from 'material-ui/svg-icons/action/delete';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import Column from './column';
import './todo.css';


// add drop functions (basic script won't work)

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleNavClose = () => this.setState({open: false});


  render() {
    return (
      <div className='mainDisplay'>
        <AppBar
          title="TODO APP"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="+ Add Column" disabled={true}/>}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="Projects"
            onLeftIconButtonTouchTap={this.handleNavClose}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
          <MenuItem onTouchTap={this.handleClose}>+ New Project</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>placeholder</MenuItem>
        </Drawer>
        <div className='flex-container'>
          <Column title='Uncompleted'/>
          <Column title='In Progress'/>
          <Column title='Completed'/>
        </div>
        <RaisedButton
          className='delete'
          icon={<Delete/>}
          primary={true}
          disabled={true}
        />
      </div>
    )
  };
}

export default Todo;
