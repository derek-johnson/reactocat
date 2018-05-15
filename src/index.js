import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';
import Nav from './containers/nav';

import './styles/main.css';

const target = document.querySelector('#root');

/* eslint-disable react/jsx-filename-extension */
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Nav />
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
/* eslint-enable react/jsx-filename-extension */
