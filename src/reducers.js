
var initialState = {
  tasks: null,
  openInput: '',
  openSidebar: false,
  openNewProject: false,
  projects: null,
  currentProject: undefined,
  openLogin: false,
  anchorEl: null,
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
    case 'TOGGLE_DROP':
      return Object.assign (
        {},
        state,
        {openLogin: action.open}
    );
    case 'SET_ELEM':
      return Object.assign (
        {},
        state,
        {anchorEl: action.element}
    );
    default:
      return state;
  }
}
