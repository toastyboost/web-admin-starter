import * as React from 'react';

import { logOut } from 'features/user';

import { Nav } from 'ui/molecules';
import { Logo } from 'ui/atoms';

import { HeaderContainer, LogoutButton } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/" />
      <Nav data={[]} />
      <LogoutButton type="primary" icon="logout" onClick={logOut}>
        Выйти
      </LogoutButton>
    </HeaderContainer>
  );
};
