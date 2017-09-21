import React from 'react';
import Article from './Article';
import storeProvider from './StoreProvider';

const ArticleList = ({ articles }) => {
  const ArticleWithStore = storeProvider(Article);
  return (
    <div>
      {Object.values(articles).map(
        (article) => (
          <ArticleWithStore
            article={article}
            key={article.id}
          />)
      )}
    </div>
  );
};
export default ArticleList;