import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'router-guards';
import { useStore } from 'effector-react';

import { $user } from 'features/user';
import { ROUTES } from 'pages/routes';

export const Routing: React.FC = () => {
    const session = useStore($user);
    const routes = renderRoutes(ROUTES, session);

    return <Switch>
        {routes.map((route) => (
            <Route key={route.name} {...route} />
        ))}
    </Switch>
};