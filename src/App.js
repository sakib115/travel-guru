/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//css import
import './App.css';
//components imports
import Display from './components/display/display'
import SignIn from './components/sign-in/signIn'
import SignUp from './components/sign-up/signUp'
import Booking from './components/booking/booking'
import Nav from './components/nav/nav'
import PrivateRoute from './components/privateRoute'

const App = () => {
    const [name, setName] = useState('');
  return (
      <div className="main-of-mains">
      <Router>
        <Nav name={name}/>
        <Switch>
            <Route exact path="/" >
              <Display />
            </Route>
            <Route path="/sign-in" >
            <SignIn setName={[setName, name]}/>
            </Route>
            <Route path="/sign-up" >
              <SignUp setName={setName}/>
            </Route>
            <PrivateRoute path='/booking/:placeName'>
                <Booking />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
