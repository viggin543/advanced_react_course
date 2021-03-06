//@ts-check --jsx
import React from 'react';
import StoreProvider from './StoreProvider';
import {FlipClock} from './FlipClock';
class TimeStamp extends React.PureComponent {


  render() {
    return (
      <div style={{margin:'65px 0 10px 0', display:'flex',justifyContent:'center'}}>
        <FlipClock timestamp={this.props.timestamp}/>
      </div>
    );
  }
}

const extraProps = (store) => ({ timestamp: store.getState().timestamp });

export default StoreProvider(extraProps)(TimeStamp);