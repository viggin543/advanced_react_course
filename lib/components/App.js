import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import TimeStamp from './TimeStamp';
import Perf from 'react-addons-perf';
import ArticleForm from './ArticleForm';

if (typeof window !== 'undefined') {
  window.Perf = Perf;
}

class App extends React.PureComponent {

  //both childContextTypes getChildContext are needed in order to create a context global object
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  //always subscribe only to the portion of the state you need .
  readState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }
  state = this.readState();


  componentDidMount() {
    this.subscriptionID = this.props.store.subscribe(this.onStateChange);
    this.props.store.startClock();
    setImmediate(() => Perf.start());
    setTimeout(() => {
      Perf.stop();
      Perf.printWasted();
    }, 5000);
  }
  onStateChange = () => {
    this.setState(this.readState());
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionID);
  }

  //react_perf -> http://localhost:8099/?react_perf
  //then in chrome click on preforence recorder
  //then search for 'User Timing' 
  //then search for your react componnents
  render() {
    
    return (
      <div className="col-md-5">
        <div style={{display: 'flex',justifyContent: 'center'}}>
          <h1 className="bd-pageheader h1"> DEV BLOG </h1>
        </div>
        <TimeStamp />
        <SearchBar />
        <ArticleForm/>
        <ArticleList
          articles={this.filterArticles()} />
      </div>);
  }

  filterArticles = () => {
    let { articles, searchTerm } = this.state;
    searchTerm = new RegExp(searchTerm, 'i');// much better then to lowercase
    return searchTerm ?
      pickBy(articles, (v) =>
        v.title.match(searchTerm) || v.body.match(searchTerm)
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
