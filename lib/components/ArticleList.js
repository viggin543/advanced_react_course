import React from 'react';
import Article from './Article'

const ArticleList = ({articles,actions}) => {
	return (
		<div>
			{Object.values(articles).map(
				article => (
					<Article
						article={article} 
						actions={actions}
						key={article.id}
						/>)
				)}
		</div>
	);

}
export default ArticleList