import React from 'react';
import Controls from './Controls';
import p from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    totalValue: 0,
    positiveFeedback: 100,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  // countTotalFeedback = () => {
  //   this.setState(prevState => ({
  //     totalValue: prevState.good + prevState.neutral + prevState.bad,
  //   }));
  // };
  render() {
    return (
      <div className={p.box}>
        <p>Please leave feedback</p>
        <Controls />
      </div>
    );
  }
}
export default Counter;
