import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (extraProps) => (Componnent) => {
  return class Wrapper extends React.Component {
    static displayName = `${Componnent.name}Container`;

    static contextTypes = {
      store: PropTypes.object
    };

    render() {      
      return (<Componnent 
        {...this.props} 
        {...extraProps(this.context.store,this.props)}
        store={this.context.store} />);
    }
  };
};

export default StoreProvider;


//the functional provider
// const StoreProvider = (Componnent) => {
//   const withStore = (props, { store }) => {
//     return (<Componnent {...props} store={store} />);
//   };
//   withStore.displayName = `${Componnent.name}Container`;
//   withStore.contextTypes = {
//     store: PropTypes.object
//   };
//   return withStore;
// };

// export default StoreProvider;