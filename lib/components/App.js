import React from 'react';
import ArticeleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

class App extends React.Component {
  //both childContextTypes getChildContext are needed in order to create a context global object
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState()
  //we  set state . no good
  //better if store is the one that handles that...
  search = (searchTerm) => this.setState({searchTerm});
  

  render() {
    let {articles,searchTerm} = this.state;
    if(searchTerm) {
      articles = pickBy(articles,(v) => {
        return v.title.match(searchTerm) || v.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar search={this.search}/>
        <ArticeleList
          articles={articles} />
      </div>);
  }
}

export default App;
