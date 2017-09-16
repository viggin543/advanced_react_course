import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

const testProps = {
  articles: {
    a: {
      id: 'a', date: "",
      title: "title", authorId: "id",
      content: "da"
    },
    b: {
      id: 'b', date: "",
      title: "title", authorId: "id",
      content: "da"
    },
  },
  actions: {
    lookupAuthor: id => ({ website: "site" })
  }
};

describe('ArticleList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList
      {...testProps}
    />).toJSON()
    expect(tree.children.length).toBe(2)
    expect(tree).toMatchSnapshot()

  });
})