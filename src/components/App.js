import React from 'react';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import ChatPage from '../containers/ChatPage';
import AuthPage from '../containers/AuthPage';
import createStore from '../core/store';
import PrivateRoute from '../containers/PrivateRoute';
import history from '../core/utils/history';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path={'/auth'} component={AuthPage} />
        <PrivateRoute path={'/chat/:id'} component={ChatPage} />
        <Redirect exact from={'/'} to={'/chat'} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
