import {shallow} from 'enzyme';
import React from 'react';
import App from '../App';
import {data} from '../../testData.json';
import Api from '../../state-api';



describe('App',() => {

  it('should render correctly', () => {
    const store = new Api(data);
    const wrapper = shallow(<App store={store}/>);
    expect(wrapper).toMatchSnapshot();
  });

});