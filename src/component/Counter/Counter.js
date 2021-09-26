import React, { Component } from 'react';
import Controls from './Controls';
import p from './Counter.module.css';
import Section from '../Section/Section';
import Container from '../Container/Container';

class Counter extends Component {
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

  countTotalFeedback = () => {
    const sum = Object.values(this.state).reduce((a, b) => a + b, 0);
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((this.state.good / this.countTotalFeedback()) * 100);

    return percentage;
  };
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <Controls
            onIncrement={this.handleIncrementGood}
            onDecrement={this.handleIncrementNeutral}
            onInDecrement={this.handleIncrementBad}
          />
        </Section>
        <h2 title="Statistics"> </h2>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <ul className={p.box__result}>
              <li>Good:{this.state.good}</li>
              <li>Neutral:{this.state.neutral}</li>
              <li>Bad:{this.state.bad}</li>
              <li>Total:{this.countTotalFeedback()}</li>
              <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
            </ul>
          ) : (
            <h3>No feedback given</h3>
          )}
        </Section>
      </Container>
    );
  }
}
export default Counter;
