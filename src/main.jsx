import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect }
from 'react-router';

require('./reset.scss');
require ('./main.scss');

import Welcome from './components/welcomepage.jsx';
// import Timer from './components/timer.jsx';
// import Quiz from './components/testscreen.jsx';

class App extends React.Component {


 render() {
   return(
     <Router history={browserHistory}>
     <Redirect from='/' to='/welcome'/>
     <Route path='/welcome'component={Welcome}/>

     </Router>);
 }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));


//state is the data driving you UI over time
//properties are also data, props are the data assoc with React comps that doesnt change
