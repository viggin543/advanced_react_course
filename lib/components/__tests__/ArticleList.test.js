import React from 'react';
import ArticleList from '../ArticleList';

// import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

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

describe('ArticleList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList
      {...testProps}
    />);

    expect(wrapper.getNode().props.children.length ).toBe(2);
    expect(wrapper.find('ArticleContainer').length ).toBe(2);
    expect(wrapper).toMatchSnapshot();

  });
});