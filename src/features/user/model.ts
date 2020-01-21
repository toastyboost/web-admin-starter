import { createStore } from 'effector';

export type Roles = 'USER' | 'CLIENT' | 'ADMIN';

export type UserSession = {
  role: Roles | null;
};

export const $session = createStore<UserSession>({
  role: null,
});
