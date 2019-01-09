import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ChatPage from '../containers/ChatPage';
import AuthPage from '../containers/AuthPage';
import createStore from '../core/store';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={'/chat'} component={ChatPage} />
        <Route path={'/auth'} component={AuthPage} />
        <Redirect to={'/chat'} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
