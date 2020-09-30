import React from 'react';
import * as ROUTES from './constants/routes';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Home, Browse, Signin, Signup } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>

        <Route exact path={ROUTES.HOME}>
          <Home/>
        </Route>

        <Route exact path={ROUTES.BROWSE}>
          <Browse/>
        </Route>

        <Route exact path={ROUTES.SIGN_IN}>
          <Signin/>
        </Route>

        <Route exact path={ROUTES.SIGN_UP}>
          <Signup/>
        </Route>

      </Switch>
    </Router>
    
  );
}
