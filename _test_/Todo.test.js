import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Todo } from '../src/components/todo.jsx';

const wrapper = shallow(<Todo />);

describe('Todo component', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
  // it('should open login on click', () => {
  //   expect(wrapper.find('DropdownLogin').exists()).toBe(false);
  //   wrapper.find('FlatButton').simulate('touchTap');
  //   expect(wrapper.find('DropdownLogin').exists()).toBe(false);
  // });
  it('should match snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
