import React from 'react';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // const total = 0;
  // const elements = Object.keys(this.state);
  onLeaveFeedback = (options) => {
    

    this.setState(prevState => {
      // console.log(prevState);
      // console.log(options);
      return {
        [options]: prevState[options] + 1
      }
    })
  }
 
  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};
  
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            // total={this.countTotalFeedback}
            // positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
export default App;
// options={}