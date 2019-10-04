import { Dashboard, Page404 } from 'pages'

export type RouteProps = {
  component: React.FunctionComponent
  exact: boolean
  routes: Array<any>
}

export const NAVIGATION_ROUTES = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
    title: 'Дашборд'
  }
]

export const ERROR_ROUTES = [
  {
    component: Page404
  }
]

// ROOT

export const ROUTES = [...NAVIGATION_ROUTES, ...ERROR_ROUTES]
