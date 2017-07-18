
// material ui
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
// react and redux
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleSidebar} from '../actions';
import {bindActionCreators} from 'redux';
import Column from './column';
import './todo.css';
import database, {auth} from '../fire.js';
import DeleteArea from './deleteArea'

// add drop functions (basic script won't work)

class Todo extends Component {
  login () {
  auth()
    .then(function (user) {
      console.log(user)
    })
    .catch(function (e) {
      console.log(e);
    });
  }

  handleToggle = () => this.props.toggleSidebar(!this.props.openSidebar);

  handleClose = () => console.log('change later');

  render() {
    return (
      <div className='mainDisplay'>
        <AppBar
          title="TODO APP"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="Login" onTouchTap={(event)=> this.login()}/>}
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
          <Column key='Uncompleted' title='Uncompleted'/>
          <Column key='In Progress' title='In Progress'/>
          <Column key='Completed' title='Completed'/>
        </div>
        <DeleteArea />
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    openSidebar: state.openSidebar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebar: toggleSidebar,
    }, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
