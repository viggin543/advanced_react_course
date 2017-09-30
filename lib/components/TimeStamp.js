//@ts-check --jsx
import React from 'react';
import StoreProvider from './StoreProvider';
import {FlipClock} from './FlipClock';
class TimeStamp extends React.PureComponent {


  render() {
    return (
      <FlipClock timestamp={this.props.timestamp}/>
    );
  }
}

const extraProps = (store) => ({ timestamp: store.getState().timestamp });

export default StoreProvider(extraProps)(TimeStamp);