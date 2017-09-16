import React from 'react'

import Api from '../api'
import {data} from '../data'
import ArticeleList from './ArticleList'


const api = new Api(data);

class App extends React.Component {
  constructor(){
      super();
      this.state = {
          articles: api.getArticles(),
          authors: api.getAuthors()
      }
  }
  articleActions = {
    lookupAuthor: id => this.state.authors[id]
  }

  render() {
    return (
      <ArticeleList 
        articles={this.state.articles}
        actions={this.articleActions}/>
    );
  }
}

export default App;
