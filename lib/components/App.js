import React from 'react'
import Api from 'state-api'
import ArticeleList from './ArticleList'

class App extends React.Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  }
  articleActions = {
    lookupAuthor: id => this.state.authors[id]
  }
// this will not work on componnentWillMount since
// its gonna be called from backend . 
// and backend  does not have fetch ...
//how ever , we are still not ok with rendering it server side . 
//the server side code will represent an empty collection 
//after articles have been pre rendered by server
//we can clean up this code..
  async componentDidMount() {
    const json = await (await fetch('/data')).json();
    const api = new Api(json);
    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
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
