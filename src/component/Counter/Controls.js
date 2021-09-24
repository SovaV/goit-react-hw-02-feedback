import React from 'react';
import p from './Counter.module.css';

const Controls = () => {
  <div className={p.boxButton}>
    <button type="button" onClick={this.handleIncrementGood}>
      Good
    </button>
    <button type="button" onClick={this.handleIncrementNeutral}>
      Neutral
    </button>
    <button type="button" onClick={this.handleIncrementBad}>
      Bad
    </button>
  </div>;
  <div className={p.box__result}>
    <span>Good:{this.state.good}</span>
    <span>Neutral:{this.state.neutral}</span>
    <span>Bad:{this.state.bad}</span>
    <span>Total:{this.props.totalValue}</span>
    <span>
      Positive feedback:
      {this.props.positiveFeedback}%
    </span>
  </div>;
};
export default Controls;
