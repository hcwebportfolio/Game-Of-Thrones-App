import React from 'react';
import {browserHistory} from 'react-router';

import CountdownTimer from './timer.jsx';
import QuestionForm from './questionform.jsx';

export default class Test extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      started: false
    }
  }

_startTimer(){
  this.setState({started: true})
}

_stopTimer() {
  this.setState({started: false})
}

_showQuiz() {
  return(
    <div className="show-quiz">
    <CountdownTimer
    started={this.state.started}
    stopTimer={this._stopTimer.bind(this)}
    secondsRemaining="60"/>
    <QuestionForm />
    </div>
     )
   }

_beginTestButton() {
  return(
    <button
    className="begin-button"
    onClick={this._startTimer.bind(this)}>
    Begin Evaluation
    </button>
  )
}

render(){
  return(
    <div className="quiz-area">
        {this.state.started ? this._showQuiz() : this._beginTestButton() }
    </div>)

 }
}
