import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {Object.values(articles).map(
        (article) => (
          <Article
            article={article}
            key={article.id}
          />)
      )}
    </div>
  );
};
export default ArticleList;