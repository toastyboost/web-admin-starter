import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compileRoutes as renderRoutes } from 'router-guards';
import { useStore } from 'effector-react';

import { GenericTemplate } from 'ui/templates';
import { ROUTES } from 'pages/routes';
import { $session } from 'features/user';

export const App = () => {
  const session = useStore($session);
  const routes = renderRoutes(ROUTES, session);

  return (
    <GenericTemplate>
      <Switch>
        {routes.map((route, key) => (
          <Route key={key} {...route} />
        ))}
      </Switch>
    </GenericTemplate>
  );
};
