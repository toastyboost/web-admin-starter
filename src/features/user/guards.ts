import { Guard } from 'router-guards';

import { UserSession, Roles } from 'api/user';

export function onlyAnon(): Guard<UserSession> {
  return (route, context) => (context && context.role ? null : route);
}

export function onlyUsers(): Guard<UserSession> {
  return (route, context) => (context && context.role ? route : null);
}

export function onlyFor(roles: Roles[]): Guard<UserSession> {
  return (route, context) =>
    context && context.role && roles.includes(context.role) ? route : null;
}
