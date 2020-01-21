import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { GenericStyles } from './styles';
import { App } from './app';

const history = createBrowserHistory();

ReactDom.render(
  <>
    <GenericStyles />
    <Router history={history}>
      <App />
    </Router>
  </>,
  document.getElementById('root'),
);
