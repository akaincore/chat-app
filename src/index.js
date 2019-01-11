import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import createStore from './core/store';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const root = document.getElementById('root');
const store = createStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , root);
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
