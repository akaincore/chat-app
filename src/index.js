import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, root);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
