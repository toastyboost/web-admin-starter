import React from 'react'

import { Nav } from 'components/blocks'
import { Logo } from 'components/atoms'

import { NAVIGATION_ROUTES } from 'pages/routes'

import { HeaderContainer, LogoutButton } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/" />
      <Nav data={NAVIGATION_ROUTES} />
      <LogoutButton type="primary">Выйти</LogoutButton>
    </HeaderContainer>
  )
}
