import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
 import { Notification } from "./Notification/Notification";



export function App () {
  
  const initialValue = { good: 0, neutral: 0, bad: 0 };

  const [count, setCount] = useState(initialValue);
  const options = Object.keys(count);
  const { good, neutral, bad } = count;

  const countTotalFeedback = options =>
    options.reduce((acc, currentOption) => acc + count[currentOption], 0);
  const countPositiveFeedbackPercentage = options => {
    if (countTotalFeedback(options) === 0) {
      return 0;
    }
    return Number(
      (count[options[0]] / countTotalFeedback(options)) * (100).toFixed()
    );
  };
  const handleClick = option =>
    setCount(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));

    return(
      <div>
            <Section title="PLease leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
            </Section>
      
            {!countTotalFeedback(options) ?
              <Notification message="There is no feedback"/>: 
              <Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad}
                total={countTotalFeedback(options)}
                positivePercentage={countPositiveFeedbackPercentage(options)} />
             </Section>}
        </div>
    )
            }



