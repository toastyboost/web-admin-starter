import { request } from 'lib/request';

export type Roles = 'USER' | 'CLIENT' | 'ADMIN';

export type UserSession = {
  role: Roles | null;
};

export type Credentials = {
  login: string;
  password: string;
};

export const getUser = (): Promise<{ payload: UserSession }> =>
  request({
    method: 'get',
    url: '/user/get-user',
  });

export const logOut = (): Promise<void> =>
  request({
    method: 'get',
    url: '/user/logout',
  });

export const logIn = (): Promise<void> =>
  request({
    method: 'post',
    url: '/user/login',
  });
