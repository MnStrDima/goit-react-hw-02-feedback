import React, { Component } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  feedbackHandler = e => {
    this.setState(prevState => {
      const buttonId = e.target.id;
      return {
        [buttonId]: prevState[buttonId] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const stateSumm = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );

    return stateSumm;
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.feedbackHandler} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 && (
            <Notification message="No feedback given" />
          )}

          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
