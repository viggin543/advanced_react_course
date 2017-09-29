import React from 'react';
import ArticleList from '../ArticleList';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { Chrome } from 'navalia';
// import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

expect.extend({ toMatchImageSnapshot });



const testProps = {
  articles: {
    a: {
      id: 'a', date: '',
      title: 'title', authorId: 'id',
      body: 'da'
    },
    b: {
      id: 'b', date: '',
      title: 'title', authorId: 'id',
      body: 'da'
    },
  },
};

//to test deep render we need a provider
describe('ArticleList', () => {

  let chrome = null;
  
  beforeEach(() => {
    chrome = new Chrome();
  });
  
  afterEach(() => {
    chrome.done();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList
      {...testProps}
    />);

    expect(wrapper.getNode().props.children.length ).toBe(2);
    expect(wrapper.find('ArticleContainer').length ).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });


  it('should NEVER happen', () => {
    
    return chrome.goto('http://localhost:8099')
      .then(() => chrome.screenshot())
      .then((image) => expect(image).toMatchImageSnapshot());
  });
});