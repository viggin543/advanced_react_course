//@ts-check --jsx
import React from 'react';
import StoreProvider from './StoreProvider';

class TimeStamp extends React.PureComponent {


  render() {
    return (
      <div>{this.props.timestamp}</div>
    );
  }
}

const extraProps = (store) => ({ timestamp: store.getState().timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) });

export default StoreProvider(extraProps)(TimeStamp);