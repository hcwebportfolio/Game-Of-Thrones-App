import React from 'react';
import {browserHistory} from 'react-router';


export default class CountdownTimer extends React.Component {

 constructor(props){
   super(props);
   this.state = {
     secondsRemaining: 60
   }
 }

 _tick() {
   this.setState({secondsRemaining: this.state.secondsRemaining - 1});
   if (this.state.secondsRemaining <= 0) {
     clearInterval(this.timer);
   }
 }
 _renderMinutes() {
   let minutes = Math.floor(this.state.secondsRemaining / 60);
   let seconds = this.state.secondsRemaining % 60;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   return (<div>{minutes}:{seconds}</div>)
 }
 componentDidMount() {
   this.setState({ secondsRemaining: this.props.secondsRemaining });
   this.timer = setInterval(this._tick.bind(this), 1000);
 }

 componentWillUnmount() {
   clearInterval(this.timer);
 }

 render(){
   return (
     <div className="timer">
       {this._renderMinutes()}
     </div>
   )
 }
}
