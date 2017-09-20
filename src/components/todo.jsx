/*
*  A React component That is a child of App.js and a parent of column.jsx,
*   sidebar.jsx, and deleteArea.jsx.
*/

// material ui
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

// react and redux
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleSidebar, togglePopover, setAnchorEl} from '../actions';
import {bindActionCreators} from 'redux';

import Sidebar from './sidebar';
import Column from './column';
import DropdownLogin from './login';
import './todo.css';
import DeleteArea from './deleteArea'

// used to make input shorter
const input = {
    width: "62%",

}

export class Todo extends Component {
  // handles user logging in
  loginClick = (event) => {
    this.props.togglePopover(!this.props.openLogin);
    this.props.setAnchorEl(event.currentTarget);
  }

  // passes redux a prop to hande clicking to open the sidebar menu
  handleToggle = () => this.props.toggleSidebar(!this.props.openSidebar);

  render() {
    return (
      <div className='mainDisplay'>
        <AppBar
          title="Project Manager"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="Login" onTouchTap={(event)=> this.loginClick(event)}/>}
        />
        <Sidebar />
        <DropdownLogin />
        <div className='flex-container'>
          <Column key='Uncompleted' length={input} size="18pt" title='Uncompleted'/>
          <Column key='In Progress' length={input} size="18pt" title='In Progress'/>
          <Column key='Completed' length={input} size="18pt" title='Completed'/>
        </div>
        <DeleteArea />
        <div className='info'>
          <div>
            Project: {this.props.currentProject ? this.props.currentProject : 'default'}
          </div>
          <div>
            version: 0.2.6
          </div>
          <div>Login to begin</div>
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    openSidebar: state.openSidebar,
    openLogin: state.openLogin,
    currentProject: state.currentProject,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebar,
      togglePopover,
      setAnchorEl,
    }, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
