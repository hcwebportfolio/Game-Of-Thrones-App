import React from 'react';
import {browserHistory} from 'react-router';


export default class Welcome extends React.Component{

  _loadSecondButton(){
    browserHistory.push('/test');
    }

  render(){
    return(
      <div className="welcome">
          <button className="startbutton"
          onClick={this._loadSecondButton.bind(this)}>
          Start Test</button>
      </div>
    )
  }
}
