import React from 'react';
import ArticeleList from './ArticleList';
import PropTypes from 'prop-types';

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
  render() {
    return (
      <ArticeleList
        articles={this.state.articles}/>
    );
  }
}

export default App;
