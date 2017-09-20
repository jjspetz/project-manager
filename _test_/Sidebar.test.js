// how to handle modules in component class
import React from 'react';
import { shallow } from 'enzyme'
import { Sidebar} from '../src/components/sidebar.jsx';

const wrapper = shallow(<Sidebar />);

describe('Sidebar component', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy();
  });
});
