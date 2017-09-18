import React, {Component} from 'react';
import {connect} from 'react-redux';
import {togglePopover, setProvider} from '../actions';
import {bindActionCreators} from 'redux';
import {auth} from '../fire.js';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';

class DropdownLogin extends Component {

  handleClose = () => {
    this.props.togglePopover(!this.props.openLogin);
  };

  handleLoginChoice = (value) => {
    this.props.togglePopover(!this.props.openLogin);
    auth(value)
      .then(function (user) {
        console.log(user)
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  render() {
      return (
          <Popover
            open={this.props.openLogin}
            anchorEl={this.props.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleClose}
          >
            <Menu>
              <MenuItem primaryText="Google" onTouchTap={() => this.handleLoginChoice('google')}/>
              <MenuItem primaryText="Github" onTouchTap={() => this.handleLoginChoice('github')}/>
              <MenuItem primaryText="Facebook" onTouchTap={() => this.handleLoginChoice('facebook')}/>
            </Menu>
          </Popover>
      );
    }
  }

function mapStateToProps(state) {
  return {
    openLogin: state.openLogin,
    anchorEl: state.anchorEl,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      togglePopover,
    }, dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(DropdownLogin);
