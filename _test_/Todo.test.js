// how to handle modules in component class
import React from 'react';
import { shallow } from 'enzyme'
import { Todo } from '../src/components/todo.jsx';

const wrapper = shallow(<Todo />);

describe('Todo component', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
});
