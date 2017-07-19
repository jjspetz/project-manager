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
import {toggleSidebar} from '../actions';
import {bindActionCreators} from 'redux';

import Sidebar from './sidebar';
import Column from './column';
import './todo.css';
import {auth} from '../fire.js';
import DeleteArea from './deleteArea'



class Todo extends Component {
  // handles user logging in
  login () {
  auth()
    .then(function (user) {
      console.log(user)
    })
    .catch(function (e) {
      console.log(e);
    });
  }

  // passes redux a prop to hande clicking to open the sidebar menu
  handleToggle = () => this.props.toggleSidebar(!this.props.openSidebar);

  render() {
    return (
      <div className='mainDisplay'>
        <AppBar
          title="Project Manager"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="Login" onTouchTap={(event)=> this.login()}/>}
        />
        <Sidebar />
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
    openSidebar: state.openSidebar,
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
