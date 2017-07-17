// try to fix
// var getLocal = () => {
//   let tasks = [];
//   Object.keys(localStorage).forEach((key) => {
//     tasks.push(JSON.parse(localStorage[key]))
//   });
//   return tasks;
// }

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
      return Object.assign (
        {},
        state,
        {tasks: state.tasks.concat(action.tasks)}
      );
    case 'REMOVE_TASK':
      return Object.assign (
        {},
        state,
        {tasks: action.tasks}
      );
    default:
      return state;
  }
}
