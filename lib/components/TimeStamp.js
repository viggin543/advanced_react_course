//@ts-check --jsx
import React from 'react';
import StoreProvider from './StoreProvider';

class TimeStamp extends React.Component {
  render() {
    return (
      <div>{this.props.timestamp.toString()}</div>
    );
  }
}

const extraProps = (store) => ({ timestamp: store.getState().timestamp });

export default StoreProvider(extraProps)(TimeStamp);