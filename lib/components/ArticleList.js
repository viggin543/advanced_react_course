import React from 'react';
import Article from './Article'

const ArticleList = ({ articles, store }) => {
	return (
		<div>
			{Object.values(articles).map(
				article => (
					<Article
						article={article}
						store={store}
						key={article.id}
					/>)
			)}
		</div>
	);

}
export default ArticleList