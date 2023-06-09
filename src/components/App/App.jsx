import React, { useState } from 'react';
import css from './App.module.css';
//_____________________________

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hendleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={hendleLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};

// class App1 extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// hendleLeaveFeedback = evt => {
//   const { name } = evt.target;
//   this.setState(state => ({ [name]: state[name] + 1 }));
// };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   const total = good + neutral + bad;
//   return total;
// };

// countPositiveFeedbackPercentage = () => {
//   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// };

//   render() {
// return (
//   <div className={css.container}>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={this.state}
//         onLeaveFeedback={this.hendleLeaveFeedback}
//       ></FeedbackOptions>
//     </Section>

//     <Section title="Statistics">
//       {this.countTotalFeedback() === 0 ? (
//         <Notification message="There is no feedback"></Notification>
//       ) : (
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback}
//           positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
//         ></Statistics>
//       )}
//     </Section>
//   </div>
// );
//   }
// }

export default App;
