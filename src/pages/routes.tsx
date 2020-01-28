import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { DashboardPage, LoginPage } from 'pages';
import { onlyAnon, onlyFor } from 'features/user';

export const ROUTES = {
  login: {
    path: '/',
    component: LoginPage,
    guards: [onlyAnon()],
  },
  dashboard: {
    path: '/',
    component: DashboardPage,
    guards: [onlyFor(['CLIENT', 'ADMIN'])],
  },
  notFound: {
    component: () => <Redirect to="/" />,
    path: '*',
  },
};
