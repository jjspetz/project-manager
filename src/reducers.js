// try to fix
// var getLocal = () => {
//   let tasks = [];
//   Object.keys(localStorage).forEach((key) => {
//     tasks.push(JSON.parse(localStorage[key]))
//   });
//   return tasks;
// }

var initialState = {
  tasks: [],
  openInput: '',
  openSidebar: false,
  inputVal: ''
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
    case 'TOGGLE_INPUT':
      return Object.assign (
        {},
        state,
        {openInput: action.open}
      );
      // case 'INPUT_UPDATE':
      //   return Object.assign (
      //     {},
      //     state,
      //     {inputVal: action.inputVal}
      //   );
      case 'TOGGLE_SIDEBAR':
        return Object.assign (
          {},
          state,
          {openSidebar: action.open}
        );
    default:
      return state;
  }
}
