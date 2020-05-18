import Home from './Home';
import Login from './Login';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Content = () => (
  <>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/about-us">
        <div>About us</div>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </>
)

export default Content;
