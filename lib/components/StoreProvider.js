import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (extraProps = () => ({})) => (Componnent) => {
  //PureComponent is a componnent that will not render unless its props or state has changed
  //it implemets shouldComponentUpdate()
  return class Wrapper extends React.PureComponent {
    static displayName = `${Componnent.name}Container`;

    static contextTypes = {
      store: PropTypes.object
    };

    componentDidMount() {
      this.subscriptionID = this.context.store.subscribe(() => this.forceUpdate());
    }
    
    componentWillUnmount() {
      this.context.store.unSubscribe(this.subscriptionID);
    }
  

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