import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect }
from 'react-router';

require('./reset.scss');
require ('./main.scss');

import Welcome from './components/welcomepage.jsx';
import Test from './components/quiz.jsx';
import Accepted from './components/accepted.jsx';
import Rejected from './components/rejected.jsx';


class App extends React.Component {


 render() {
   return(
   <Router history={browserHistory}>
     <Redirect from='/' to='/welcome'/>
     <Route path='/welcome'component={Welcome}/>
     <Route path='/test' component={Test}/>
     <Route path='/accepted' component={Accepted}/>
     <Route path='/rejected' component={Rejected}/>
    </Router>);
 }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));


//state is the data driving you UI over time
//properties are also data, props are the data assoc with React comps that doesnt change
