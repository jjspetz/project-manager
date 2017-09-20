import React from 'react';
import { shallow } from 'enzyme'
import { DeleteArea } from '../src/components/deleteArea.jsx';
import toJson from 'enzyme-to-json';

const faux = el => el;
const wrapper = shallow(<DeleteArea
                              connectDropTarget={faux} />);

describe('DeleteArea', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should contain a div', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
  it('should match snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
