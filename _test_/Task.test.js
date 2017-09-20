import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import { Task } from '../src/components/task.jsx';

const faux = el => el;
const taskName = 'testing'
const wrapper = shallow(<Task task={taskName}
                              connectDragSource={faux}
                              isDragging />);

describe('Task', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should contain a div', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
  it('should contain a li with the task', () => {
    expect(wrapper.find('div')).toBeTruthy();
    expect(wrapper.instance().props.task).toContain(taskName);
  });
  it('should match snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
