import React from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from './pages';
import './App.css';
import signinpage from './pages/signin';
import signUpPage from './pages/SignUp';



function App() {
  return (
    <Router>
      <Switch>  
        <Route path= '/' component={ Home} exact /> 
        <Route path= '/signin' component={ signinpage} exact /> 
        <Route path= '/SignUp' component={ signUpPage} exact /> 
      </Switch>
    {/* <Home /> */}
    </Router>
  );
}

export default App;
