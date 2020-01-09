import * as React from 'react'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { ROUTES_OBJECT } from 'pages/routes'
import { GenericTemplate } from 'ui/templates'

import { GlobalStyles } from './styles'
import 'antd/dist/antd.min.css'

const history = createBrowserHistory()

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <GenericTemplate>
          {/* <Switch>
            {Object.keys(ROUTES_OBJECT).map((route, key) => (
              <Route key={key} {...ROUTES_OBJECT[route]} />
            ))}
          </Switch> */}
        </GenericTemplate>
      </Router>
    </>
  )
}
