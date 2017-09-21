import React from 'react';
import ArticeleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import TimeStamp from './TimeStamp';

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


  componentDidMount() {
    this.subscriptionID = this.props.store.subscribe(this.onStateChange);
    this.props.store.startClock();
  }
  onStateChange = () => {
    this.setState(this.props.store.getState());
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionID);
  }


  render() {
    return (
      <div>
        <TimeStamp />
        <SearchBar search={this.props.store.search} />
        <ArticeleList
          articles={this.filterArticles()} />
      </div>);
  }

  filterArticles = () => {
    let { articles, searchTerm } = this.state;
    searchTerm = searchTerm.toLowerCase();
    return searchTerm ?
      pickBy(articles, (v) =>
        v.title.toLowerCase().match(searchTerm) || v.body.toLowerCase().match(searchTerm)
      ) : articles;
  }

}

App.propTypes = {
  store: PropTypes.shape({
    search: PropTypes.func,
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func,
    getState: PropTypes.func,
    lookupAuthor: PropTypes.func,
    startclock: PropTypes.func,
  })
};

export default App;
