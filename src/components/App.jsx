import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Component } from 'react';

export class App extends Component {
  state = {
    good: 2,
    neutral: 8,
    bad: 5,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedbackPercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positiveFeedbackPercentage;
  }

  render() {
    return (
      <Layout>
        <h1>Please leave feedback</h1>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage().toFixed(1)}%
          </p>
        </div>
        <GlobalStyle />
      </Layout>
    );
  }
}
