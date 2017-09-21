
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DropdownLogin } from '../src/components/login.jsx';

const wrapper = shallow(<DropdownLogin />);

describe('<DropdownLogin />', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should contain a div', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
  it('Popover should be closed initially', () => {
    expect(wrapper.props().open).toBe(false);
  });
  it('should match snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
