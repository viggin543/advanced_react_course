import React from 'react'
import ArticeleList from './ArticleList'

class App extends React.Component {
  state = this.props.store.getState()
  render() {
    return (
      <ArticeleList
        articles={this.state.articles}
        store={this.props.store} />
    );
  }
}

export default App;
