import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Column } from '../src/components/column.jsx';

const faux = el => el;
const wrapper = shallow(<Column connectDropTarget={faux} />);


describe('Column component', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should match snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
