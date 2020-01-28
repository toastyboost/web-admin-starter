import { createStore, createEffect } from 'effector';

import * as API from 'api/user';

export const $session = createStore<API.UserSession>({
  role: null,
});

export const getRole = createEffect<void, API.UserSession>();
export const logOut = createEffect<React.MouseEvent<HTMLElement>, {}>();

getRole.use(API.getRole);
logOut.use(API.logOut);

export const $isRolePending = getRole.pending;
