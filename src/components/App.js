/*
*   This is the main React Container for my Project Manager App
*/

// react/redux imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store.js';
import Todo from './todo.jsx';

// allows for draging and dropping in react
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import { default as TouchBackend } from 'react-dnd-touch-backend';

// Matreial UI imports
import {indigo500, indigo100, indigo900, grey500, grey700, white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// allows you to click on things in react
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// sets the theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo100,
    accent1Color: indigo900,
    accent2Color: grey500,
    accent3Color: grey700,
    alternateTextColor: white,
    labelColor: white,
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Todo/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
