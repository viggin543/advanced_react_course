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
  

  componentDidMount(){
    const onStateChange = () => {      
      this.setState(this.props.store.getState());
    };
    this.subscriptionID = this.props.store.subscribe(onStateChange);
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionID);
  }
  
  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      articles = pickBy(articles, (v) => {
        return v.title.toLowerCase().match(searchTerm) || v.body.toLowerCase().match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar search={this.props.store.search} />
        <ArticeleList
          articles={articles} />
      </div>);
  }
}

App.propTypes = {
  store: PropTypes.shape({
    search: PropTypes.func,
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func,
    getState: PropTypes.func,
    lookupAuthor: PropTypes.func,
  })
};

export default App;
