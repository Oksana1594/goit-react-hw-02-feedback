import { Component } from 'react'

import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';
import Container from './Container/Container';

import 'index.css';

class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  statePropNames = Object.keys(this.state);
    
    onLeaveFeedback = (name) => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1
            }
        })
    }


    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
 
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const value = this.state.good;
        const result = ((value / total) * 100).toFixed(0);
        return Number(result);
    }


    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedbackPersent = this.countPositiveFeedbackPercentage("good");
        return (
            <div className="wrapper">
            <SectionTitle title="Please leave feedback">
              <Container>
                <FeedbackOptions
                options={this.statePropNames}
                onLeaveFeedback={this.onLeaveFeedback} /> 
              </Container>
              
            </SectionTitle>
            
            {this.countTotalFeedback() !== 0 && (
              <SectionTitle title="Statistics">
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positiveFeedbackPersent} />
              </SectionTitle>
            )}
                 
            
            {this.countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
            )}
            </div>
        )
    }
};

export default App;


