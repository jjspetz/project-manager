/*
*  A React component That is a child of todo.jsx.
*   This is incharge of rendering the sidebar menu and handling the
*   various functionality of said sidebar.
*/

// material ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// react and redux
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleSidebar, setCurrentProject, toggleProjectInput} from '../actions';
import {bindActionCreators} from 'redux';

import './todo.css';
import database, {User} from '../fire.js';


export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  // sets the redux props which handles the closing of the sidbae menu
  handleToggle = () => this.props.toggleSidebar(!this.props.openSidebar);

  // allows user to toggle the input open and close that handles the creation
  // of new projects. This is linked through redux
  handleNewProject = () => {
    this.props.toggleProjectInput(!this.props.openNewProject);
  }

  // sets project to this on click and closes sidebar menu
  handleProjectClick = (event, value) => {
    // checks to make sure the click is meant for the menuitem not the nested delete button
    if (event === undefined || event.target.tagName === 'DIV') {
      this.props.setCurrentProject(value);
      this.props.toggleSidebar(!this.props.openSidebar);
    }
  }

  // adds a new project to the database
  addProject = (event) => {
    if (this.state.name) {
      // writes in database
      database.ref('users/' + User.user.uid + '/projects').child(this.state.name).set({
        name: this.state.name
      });
      // closes input
      this.props.toggleProjectInput(!this.props.openNewProject);
      // resets input to blank string
      this.setState({name: ''});
    }
    event.preventDefault();
  }

  // deletes a project from the database
  deleteProject = (event, value) => {
    // makes sure click was on the nested delete button (not really necessary)
    if (event.target.tagName === 'path' || event.target.tagName === 'svg') {
      database.ref('users/' + User.user.uid + '/projects').child(value).remove();
    }
  }

  // displays typing in the input in real time
  add(event, key) {
      this.setState({[key]: event.target.value})
    }

  render() {
    return (
        <Drawer
          docked={false}
          width={400}
          open={this.props.openSidebar}
          onRequestChange={this.handleToggle}
        >
          <AppBar
            title="Projects"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
          <MenuItem onTouchTap={this.handleNewProject}>+ New Project</MenuItem>
          {this.props.openNewProject ?
          <form className='sidebarInput'>
          <TextField
            className="sideInput"
            hintText="Enter a project"
            value={this.state.name}
            onChange={event => this.add(event, 'name')}
          />
          <RaisedButton label="Submit" primary={true}
            onTouchTap={(event)=> this.addProject(event)}/>
          </form>
          : null}
          <MenuItem onTouchTap={() => this.handleProjectClick(undefined)}>default</MenuItem>
          {this.props.projects ? Object.values(this.props.projects).map((project) =>
            <MenuItem key={project.name} onTouchTap={(event) => this.handleProjectClick(event, project.name)}>
              <IconButton onTouchTap={(event) => this.deleteProject(event, project.name)}>
                <NavigationClose />
              </IconButton>
              {project.name}
            </MenuItem>) : null}
        </Drawer>
    )
  };
}

function mapStateToProps(state) {
  return {
    openSidebar: state.openSidebar,
    openNewProject: state.openNewProject,
    projects: state.projects,
    currentProject: state.currentProject
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebar: toggleSidebar,
      toggleProjectInput: toggleProjectInput,
      setCurrentProject: setCurrentProject
    }, dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
