import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Column extends Component {
  render() {
    return (
      <div className='mainDisplay'>
        <Card className='card'>
          <CardTitle title={this.props.title}/>
          <ol id={this.props.title}>
            {this.props.tasks.map((task) =>
              <li key={task}>{task}</li>
            )}
          </ol>
        </Card>
      </div>
    );
  }
}

export default Column
