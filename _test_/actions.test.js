import * as action from '../src/actions';

const data = 'test';

describe('Actions', () => {
  it('test API_CALL', () => {
    const test = action.apiCall(data);
    expect(test.type).toEqual('API_CALL');
    expect(test.tasks).toEqual(data);
  });
  it('test TOGGLE_INPUT', () => {
    const test = action.toggleInput(data);
    expect(test.type).toEqual('TOGGLE_INPUT');
    expect(test.open).toEqual(data);
  });
  it('test TOGGLE_SIDEBAR', () => {
    const test = action.toggleSidebar(data);
    expect(test.type).toEqual('TOGGLE_SIDEBAR');
    expect(test.open).toEqual(data);
  });
  it('test TOGGLE_PROJECT', () => {
    const test = action.toggleProjectInput(data);
    expect(test.type).toEqual('TOGGLE_PROJECT');
    expect(test.open).toEqual(data);
  });
  it('test CHANGE_PROJECT', () => {
    const test = action.setCurrentProject(data);
    expect(test.type).toEqual('CHANGE_PROJECT');
    expect(test.project).toEqual(data);
  });
  it('test TOGGLE_DROP', () => {
    const test = action.togglePopover(data);
    expect(test.type).toEqual('TOGGLE_DROP');
    expect(test.open).toEqual(data);
  });
  it('test SET_PROVIDER', () => {
    const test = action.setProvider(data);
    expect(test.type).toEqual('SET_PROVIDER');
    expect(test.provider).toEqual(data);
  });
  it('test SET_ELEM', () => {
    const test = action.setAnchorEl(data);
    expect(test.type).toEqual('SET_ELEM');
    expect(test.element).toEqual(data);
  });
});
