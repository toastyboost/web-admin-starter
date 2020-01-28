import { request } from 'lib/request';

export type Roles = 'USER' | 'CLIENT' | 'ADMIN';

export type UserSession = {
  role: Roles | null;
};

export const getRole = (): Promise<UserSession> =>
  request({
    method: 'post',
    url: '/user/get-role',
  });

export const logOut = (): Promise<{}> =>
  request({
    method: 'post',
    url: '/user/logout',
  });
