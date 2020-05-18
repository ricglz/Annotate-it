import Loader from './Loader';
import React from 'react';
import loadable from "@loadable/component";
import { Switch, Route } from 'react-router-dom';

const Home = loadable(() => import('./Home'), {
  fallback: <Loader />
});
const Login = loadable(() => import('./Login'), {
  fallback: <Loader />
});
const AboutUs = loadable(() => import('./AboutUs'), {
  fallback: <Loader />
});

const Content = () => (
  <>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </>
)

export default Content;
