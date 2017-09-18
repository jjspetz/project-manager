import reducer from '../src/reducers';

// what state is set to on load
const initialState = {
  tasks: null,
  openInput: '',
  openSidebar: false,
  openNewProject: false,
  projects: null,
  currentProject: undefined,
  openLogin: false,
  anchorEl: null,
};

// what all changes are expected to be
const changedState = {
  tasks: 'running test',
  openInput: 'open',
  openSidebar: true,
  openNewProject: true,
  projects: 'default',
  currentProject: 'test project',
  openLogin: true,
  anchorEl: 'default',
};

describe('Reducers', () => {
  it('should have a default state', () => {
    expect(reducer(undefined, {type: 'unexpected'})).toEqual(initialState)
  });
  it('should handle API_CALL', () => {
    expect(reducer(initialState, {
      type: 'API_CALL',
      tasks: changedState.tasks,
      projects: changedState.projects
      })).toEqual({
        tasks: changedState.tasks,
        openInput: initialState.openInput,
        openSidebar: initialState.openSidebar,
        openNewProject: initialState.openNewProject,
        projects: changedState.projects,
        currentProject: initialState.currentProject,
        openLogin: initialState.openLogin,
        anchorEl: initialState.anchorEl,
      })
  });
  it('should handle TOGGLE_INPUT', () => {
    expect(reducer(initialState, {
      type: 'TOGGLE_INPUT',
      open: changedState.openInput,
      })).toEqual({
        tasks: initialState.tasks,
        openInput: changedState.openInput,
        openSidebar: initialState.openSidebar,
        openNewProject: initialState.openNewProject,
        projects: initialState.projects,
        currentProject: initialState.currentProject,
        openLogin: initialState.openLogin,
        anchorEl: initialState.anchorEl,
      })
  });
  it('should handle TOGGLE_SIDEBAR', () => {
    expect(reducer(initialState, {
      type: 'TOGGLE_SIDEBAR',
      open: true,
      })).toEqual({
        tasks: initialState.tasks,
        openInput: initialState.openInput,
        openSidebar: changedState.openSidebar,
        openNewProject: initialState.openNewProject,
        projects: initialState.projects,
        currentProject: initialState.currentProject,
        openLogin: initialState.openLogin,
        anchorEl: initialState.anchorEl,
      })
  });
  it('should handle TOGGLE_PROJECT', () => {
    expect(reducer(initialState, {
      type: 'TOGGLE_PROJECT',
      open: true,
      })).toEqual({
        tasks: initialState.tasks,
        openInput: initialState.openInput,
        openSidebar: initialState.openSidebar,
        openNewProject: changedState.openNewProject,
        projects: initialState.projects,
        currentProject: initialState.currentProject,
        openLogin: initialState.openLogin,
        anchorEl: initialState.anchorEl,
      })
  });
  it('should handle CHANGE_PROJECT', () => {
    expect(reducer(initialState, {
      type: 'CHANGE_PROJECT',
      project: 'test project',
      })).toEqual({
        tasks: initialState.tasks,
        openInput: initialState.openInput,
        openSidebar: initialState.openSidebar,
        openNewProject: initialState.openNewProject,
        projects: initialState.projects,
        currentProject: changedState.currentProject,
        openLogin: initialState.openLogin,
        anchorEl: initialState.anchorEl,
      })
  });
  it('should handle TOGGLE_DROP', () => {
    expect(reducer(initialState, {
      type: 'TOGGLE_DROP',
      open: true,
      })).toEqual({
        tasks: initialState.tasks,
        openInput: initialState.openInput,
        openSidebar: initialState.openSidebar,
        openNewProject: initialState.openNewProject,
        projects: initialState.projects,
        currentProject: initialState.currentProject,
        openLogin: changedState.openLogin,
        anchorEl: initialState.anchorEl,
      })
  });
  it('should handle SET_ELEM', () => {
    expect(reducer(initialState, {
      type: 'SET_ELEM',
      element: 'default',
      })).toEqual({
        tasks: initialState.tasks,
        openInput: initialState.openInput,
        openSidebar: initialState.openSidebar,
        openNewProject: initialState.openNewProject,
        projects: initialState.projects,
        currentProject: initialState.currentProject,
        openLogin: initialState.openLogin,
        anchorEl: changedState.anchorEl,
      })
  });
  it('should handle default cases', () => {
    expect(reducer(initialState, {
      type: 'anything else',
      })).toEqual({
        tasks: initialState.tasks,
        openInput: initialState.openInput,
        openSidebar: initialState.openSidebar,
        openNewProject: initialState.openNewProject,
        projects: initialState.projects,
        currentProject: initialState.currentProject,
        openLogin: initialState.openLogin,
        anchorEl: initialState.anchorEl,
      })
  });

});
