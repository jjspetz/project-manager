
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
