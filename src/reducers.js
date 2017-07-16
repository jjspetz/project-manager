
var initialState = {
  tasks: []
};

export default function reducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'API_CALL':
      return Object.assign (
        {},
        state,
        {tasks: action.tasks}
      );
    case 'ADD_TASK':
      var new_state = {};
      new_state = Object.assign (
        {},
        state,
        {top500: action.articles}
      )
      return new_state;
    default:
      return state;
  }
}
