import * as React from 'react'

import { NavContainer, NavLink, NavMenu, NavItem } from './styles'

type MenuItem = {
  path: string
  title: string
}

type MenuData = {
  data: Array<MenuItem>
}

export const Nav: React.FC<MenuData> = ({ data }) => {
  return (
    <NavContainer>
      <NavMenu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        {data.map(({ path, title }, key) => (
          <NavItem key={key}>
            <NavLink to={path}>{title}</NavLink>
          </NavItem>
        ))}
      </NavMenu>
    </NavContainer>
  )
}
