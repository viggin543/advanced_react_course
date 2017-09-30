import React from 'react';

class AnimatedCard extends React.PureComponent {
  render() {
    const { position, digit, animation } = this.props;
    return (
      <div className={`flipCard ${position} ${animation}`}>
        <span>{digit}</span>
      </div>
    );
  }
}

class StaticCard extends React.PureComponent {
  render() {
    const { position, digit } = this.props;
    return (
      <div className={position}>
        <span>{digit}</span>
      </div>
    );
  }
}

class FlipUnitContainer extends React.PureComponent {

  render() {
    const { digit, shuffle, unit } = this.props;

    let now = digit;
    let before = digit - 1;

    // to prevent a negative value
    if (unit !== 'hours') {
      before = before === -1 ? 59 : before;
    } else {
      before = before === -1 ? 23 : before;
    }

    // add zero
    if (now < 10) now = `0${now}`;
    if (before < 10) before = `0${before}`;

    // shuffle digits
    const digit1 = shuffle ? before : now;
    const digit2 = !shuffle ? before : now;

    // shuffle animations
    const animation1 = shuffle ? 'fold' : 'unfold';
    const animation2 = !shuffle ? 'fold' : 'unfold';

    return (
      <div className={'flipUnitContainer'}>
        <StaticCard
          position={'upperCard'}
          digit={now}
        />
        <StaticCard
          position={'lowerCard'}
          digit={before}
        />
        <AnimatedCard
          position={'first'}
          digit={digit1}
          animation={animation1}
        />
        <AnimatedCard
          position={'second'}
          digit={digit2}
          animation={animation2}
        />
      </div>
    );
  }
}

export class FlipClock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true
    };
  }

  updateTime = () => {
    const time = this.props.timestamp;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle
      });
    }
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle
      });
    }
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle
      });
    }
  }
  componentWillReceiveProps(){
    this.updateTime();        
  }
  render() {
    const { hours, minutes, seconds, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;
    return (
      <div className={'flipClock'}>
        <FlipUnitContainer
          unit={'hours'}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={'minutes'}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={'seconds'}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}