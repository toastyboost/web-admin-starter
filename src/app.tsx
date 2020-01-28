import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'router-guards';
import { useStore } from 'effector-react';

import { GenericTemplate } from 'ui/templates';
import { ROUTES } from 'pages/routes';
import { $session, $isRolePending, getRole } from 'features/user';

export const App = () => {
  React.useEffect(() => {
    getRole();
  }, []);

  const isRolePending = useStore($isRolePending);

  const session = useStore($session);
  const routes = renderRoutes(ROUTES, session);

  return (
    <GenericTemplate>
      {isRolePending ? null : (
        <Switch>
          {routes.map((route, key) => (
            <Route key={key} {...route} />
          ))}
        </Switch>
      )}
    </GenericTemplate>
  );
};
