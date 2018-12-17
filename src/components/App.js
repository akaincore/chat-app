import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from "./layout/ChatPage";
import AuthPage from "./auth/AuthPage";

const App = () => (
  <Router>
    <Switch>
      <Route path={'/chat'} component={ChatPage}/>
      <Route path={'/auth'} component={AuthPage}/>
      <Redirect to={'/chat'}/>
    </Switch>
  </Router>
);

export default App;
