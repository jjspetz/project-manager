// try to fix
// var getLocal = () => {
//   let tasks = [];
//   Object.keys(localStorage).forEach((key) => {
//     tasks.push(JSON.parse(localStorage[key]))
//   });
//   return tasks;
// }

var initialState = {
  tasks: null,
  openInput: '',
  openSidebar: false,
  openNewProject: false,
  inputVal: '',
  projects: null,
  currentProject: undefined,
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
        {
          tasks: action.tasks,
          projects: action.projects
        }
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
    case 'TOGGLE_PROJECT':
      return Object.assign (
        {},
        state,
        {openNewProject: action.open}
      );
    case 'CHANGE_PROJECT':
      return Object.assign (
        {},
        state,
        {currentProject: action.project}
      );
    default:
      return state;
  }
}
