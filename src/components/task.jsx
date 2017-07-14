import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <li key={this.props.task}>{this.props.task}</li>
    );
  }
}

export default Task
