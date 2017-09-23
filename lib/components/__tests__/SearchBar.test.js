import React from 'react';
import SearchBar from '../SearchBar';

// import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

describe('SearchBar', () => {

  it('renders correctly', () => {
    const unit = shallow(<SearchBar/>);
    expect(unit).toMatchSnapshot();
  });
});