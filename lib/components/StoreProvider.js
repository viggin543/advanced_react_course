import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (extraProps = () => ({})) => (Componnent) => {
  //PureComponent is a componnent that will not render unless its props or state has changed
  //it implemets shouldComponentUpdate()
  return class Wrapper extends React.PureComponent {
    static displayName = `${Componnent.name}Container`;

    //enables store
    static contextTypes = {
      store: PropTypes.object
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    }
    state = this.usedState();

    componentDidMount() {
      this.subscriptionID = this.context.store.subscribe(() => {
        if (this.subscriptionID) {
          this.setState(this.usedState());
        }
      });
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionID);
      this.subscriptionID = null;
    }


    render() {
      return (<Componnent
        {...this.props}
        {...this.usedState()}
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