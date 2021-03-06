
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Sidebar } from '../src/components/sidebar.jsx';

const wrapper = shallow(<Sidebar />);

describe('Sidebar component', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should match snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
