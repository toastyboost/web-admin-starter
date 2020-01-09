import * as React from 'react'

import { Nav } from 'ui/molecules'
import { Logo } from 'ui/atoms'

import { HeaderContainer, LogoutButton } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/" />
      <Nav data={[]} />
      <LogoutButton type="primary" icon="logout">
        Выйти
      </LogoutButton>
    </HeaderContainer>
  )
}
