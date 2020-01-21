import { DashboardPage, LoginPage, NotFound } from 'pages';
import { onlyUsers, onlyFor } from 'features/user';

export const ROUTES = {
  login: {
    path: '/',
    component: LoginPage,
    guards: [onlyUsers()],
  },
  dashboard: {
    path: '/',
    component: DashboardPage,
    guards: [onlyFor(['CLIENT', 'ADMIN'])],
  },
  404: {
    path: '*',
    component: NotFound,
  },
};
