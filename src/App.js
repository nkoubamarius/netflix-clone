import React from 'react';
import * as ROUTES from './constants/routes';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Home, Browse, Signin, Signup } from './pages';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';
import {useAuthListener} from './hooks'

export default function App() {
  const {user} = useAuthListener();
  console.log(user);

  return (
    <Router>
      <Switch>

          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
            <Signin/>
          </IsUserRedirect>

          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
            <Signup/>
          </IsUserRedirect>

          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
            <Home/>
          </IsUserRedirect>

          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <Browse/>
          </ProtectedRoute>
        
      </Switch>
    </Router>
    
  );
}
