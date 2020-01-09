import { DashboardPage, LoginPage, Page404 } from 'pages'

export const ROUTES_OBJECT = {
  users: {
    path: '/',
    exact: true,
    component: DashboardPage
    // guards: [onlyUsers()],
  },
  login: {
    path: '/',
    exact: true,
    component: LoginPage
    // guards: [onlyAnon()],
  },
  error: {
    component: Page404
  }
}
