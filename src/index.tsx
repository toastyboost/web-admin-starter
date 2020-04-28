import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { GenericStyles, AntStylesOveride } from './styles';
import { App } from './app';

const history = createBrowserHistory();

ReactDom.render(
  <>
    <GenericStyles />
    <AntStylesOveride />
    <Router history={history}>
      <App />
    </Router>
  </>,
  document.getElementById('root'),
);
