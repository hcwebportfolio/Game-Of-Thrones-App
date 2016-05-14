import React from 'react';
import {browserHistory} from 'react-router';

let correctAnswer = 0;

let question = [
  {question:"questionone",answer: '1'},
  {question:"questiontwo",answer: '1'},
  {question:"questionthree",answer: '1'}
]

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

_submitAnswer(e){
  e.preventDefault();
  let userInput = this.refs.quizInput.value.toLowerCase();
  let correctInput = question[this.state.current].answer.toLowerCase();

  if (userInput === correctInput) {
    correctAnswer ++;
  };

  if (this.state.current < question.length -1){
    this.setState({ current: this.state.current +1 })
  };
  this.refs.quizInput.value= '';

  if (this.state.current === question.length -1) {
    this._lastQuestion();
    };
}

_lastQuestion() {
 correctAnswer === question.length ?
 browserHistory.push('/accepted') :
 browserHistory.push('/rejected');
}

render() {
  return(
    <div className="question-box">
    <h3>{question[this.state.current].question}</h3>
    <form onSubmit={this._submitAnswer.bind(this)}>
      <input type="text" ref='quizInput'/>
      <button className="submit-button">
      <span className="uppercase">Submit answer</span>
    </button>
   </form>
  </div>
  )
 }
}
