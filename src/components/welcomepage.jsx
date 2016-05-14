import React from 'react';
import {browserHistory} from 'react-router';

import CountdownTimer from './timer.jsx';

export default class Welcome extends React.Component{
  render(){
    return(
      <div className="welcome">
          <button className="startbutton">Start Test</button>
          <CountdownTimer secondsRemaining="60"/>
      </div>
    )
  }
}
