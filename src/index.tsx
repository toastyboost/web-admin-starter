import * as React from 'react'
import * as ReactDom from 'react-dom'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { GlobalStyles } from './styles'
import { ROUTES } from 'pages/routes'
import { DefaultLayout } from 'components/templates'

const history = createBrowserHistory()

ReactDom.render(
  <>
    <GlobalStyles />
    <Router history={history}>
      <DefaultLayout>
        <Switch>
          {ROUTES.map((route, key) => (
            <Route key={key} {...route} />
          ))}
        </Switch>
      </DefaultLayout>
    </Router>
  </>,
  document.getElementById('root')
)
