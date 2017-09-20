// how to handle modules in component class
import React from 'react';
import { mount, shallow } from 'enzyme'
import { DropdownLogin } from '../src/components/login.jsx';

const wrapper = shallow(<DropdownLogin />);

describe('<DropdownLogin />', () => {
  it('should render', () => {
    // expect(wrapper).toBeTruthy();
  });
  // it('should contain a div', () => {
  //   expect(wrapper.find('div')).toBeTruthy();
  // });
  // it('should contain a li with the task', () => {
  //   expect(wrapper.find('div')).toBeTruthy();
  //   expect(wrapper.instance().props.task).toContain(taskName);
  // });
});
