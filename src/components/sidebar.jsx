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


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleToggle = () => this.props.toggleSidebar(!this.props.openSidebar);

  handleNewProject = () => {
    this.props.toggleProjectInput(!this.props.openNewProject);
  }

  handleProjectClick = (value) => {
    this.props.setCurrentProject(value);
    this.props.toggleSidebar(!this.props.openSidebar);
  }

  addProject = (event) => {
    // writes in database
    database.ref('users/' + User.user.uid + '/projects').child(this.state.name).set({
      name: this.state.name
    });
    // closes input
    this.props.toggleProjectInput(!this.props.openNewProject);
    // resets input to blank string
    this.setState({name: ''});
    event.preventDefault();
  }

  add(event, key) {
      this.setState({[key]: event.target.value})
    }

  render() {
    return (
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
          <MenuItem onTouchTap={this.handleNewProject}>+ New Project</MenuItem>
          {this.props.openNewProject ?
          <form className='sidebarInput'>
          <TextField
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
            <MenuItem key={project.name} onTouchTap={() => this.handleProjectClick(project.name)}>
              <IconButton><NavigationClose /></IconButton>
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
