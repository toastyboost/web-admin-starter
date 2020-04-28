import { createStore, createDomain } from 'effector';
import { message } from 'antd';

import * as API from 'api/user';

import { errorCodes } from 'lib/constants';

export const userDomain = createDomain();

const defaultUser = {
  role: null,
};

export const $user = createStore<API.UserSession>(defaultUser);
export const $isUserPending = createStore<boolean>(true);

type GetUserResult = { payload: API.UserSession };

export const getUser = userDomain.createEffect<void, GetUserResult>();
export const logIn = userDomain.createEffect<API.Credentials, void>();
export const logOut = userDomain.createEffect<void, void>();

getUser.use(API.getUser);
logOut.use(API.logOut);
logIn.use(API.logIn);

$user
  .on(getUser.done, (state, { result }) => ({ ...state, ...result.payload }))
  .on(getUser.fail, () => defaultUser)
  .on(logOut.done, () => defaultUser);

$isUserPending.on(getUser.done, () => false).on(getUser.pending, () => true);

userDomain.onCreateEffect((effect) => {
  $user.on(effect.fail, (user, payload) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = payload.error as any;

    if (err.status === errorCodes.NOT_AUTHED) {
      return { role: null };
    }
    return user;
  });

  effect.done.watch(() => {
    message.warning('Authorization success');
  });

  effect.fail.watch(() => {
    message.warning('Authorization fail');
  });
});
