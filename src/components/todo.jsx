import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Delete from 'material-ui/svg-icons/action/delete';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import {connect} from 'react-redux';
import {toggleSidebar} from '../actions';
import {bindActionCreators} from 'redux';
import Column from './column';
import './todo.css';


// add drop functions (basic script won't work)

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle = () => this.props.toggleSidebar(!this.props.openSidebar);

  handleClose = () => console.log('change later');

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
          open={this.props.openSidebar}
          onRequestChange={this.handleToggle}
        >
          <AppBar
            title="Projects"
            onLeftIconButtonTouchTap={this.handleToggle}
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

function mapStateToProps(state) {
  console.log(state.openSideBar);
  return {
    openSidebar: state.openSidebar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {toggleSidebar: toggleSidebar}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
