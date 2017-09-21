//@ts-check --jsx
import React from 'react';

class TimeStamp extends React.Component {
  render() {
    return(
      <div>{this.props.timestamp.toString()}</div>
    );
  }
}

export default TimeStamp;