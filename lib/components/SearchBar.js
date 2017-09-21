import React from 'react';
//'lodash.debounce' this way we import only the debounce function 
import debounce from 'lodash.debounce';
import StoreProvider from './StoreProvider';

//https://facebook.github.io/react/docs/refs-and-the-dom.html
{/* <input
type="text"
ref={(input) => { this.textInput = input; }} /> */}
class SearchBar extends React.Component {

  state = {
    searchTerm: ''
  }

  doSearch = debounce(() => {    
    this.props.store.search(this.state.searchTerm);
  }, 300);

  handleChange = (event) => {
    this.setState({ searchTerm: event.currentTarget.value },
      this.doSearch);
  }

  render() {
    return (
      <input
        type="search"
        placeholder="enter filter"
        onChange={this.handleChange}
        value={this.state.searchTerm}
      />
    );
  }
}
export default StoreProvider()(SearchBar);