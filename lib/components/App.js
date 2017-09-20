import React from 'react'
import ArticeleList from './ArticleList'

class App extends React.Component {
  state = this.props.store.getState()
  
  articleActions = {
    lookupAuthor: id => this.state.authors[id]
  }

  render() {
    return (
      <ArticeleList
        articles={this.state.articles}
        actions={this.articleActions} />
    );
  }
}

export default App;
