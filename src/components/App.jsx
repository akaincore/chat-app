import React from 'react';
import {
  Redirect, Route, Router, Switch,
} from 'react-router-dom';
import ChatPage from '../containers/ChatPage';
import AuthPage from '../containers/AuthPage';
import PrivateRoute from '../containers/PrivateRoute';
import history from '../core/utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <PrivateRoute path="/chat/:id?" component={ChatPage} />
      <Redirect exact from="/" to="/chat" />
    </Switch>
  </Router>
);

export default App;
