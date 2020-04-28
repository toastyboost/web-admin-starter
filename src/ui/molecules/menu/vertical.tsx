import * as React from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'

import { Link } from 'ui/atoms'

type MenuDataProps = {
  menuData: Array<MenuItemProps>;
  defaultSelectedKeys?: Array<string>;
  defaultOpenKeys?: Array<string>;
}

type MenuItemProps = {
  title: string;
  icon?: React.ReactNode;
  to?: string;
  data?: Array<SubItemProps>;
}

type SubItemProps = {
  title: string;
  icon?: string;
  to?: string;
}

export const VerticalMenu: React.FC<MenuDataProps> = ({
  menuData,
  defaultSelectedKeys,
  defaultOpenKeys
}) => {
  const { SubMenu } = Menu

  return (
    <Menu mode="inline" defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={defaultOpenKeys}>
      {menuData.map(({ title, icon, to, data }, key) =>
        data ? (
          <SubMenu
            key={`sub-${key}`}
            title={
              <span>
                {icon && icon} {title}
              </span>
            }
          >
            {data.map(({ title, to, icon }, subKey) => (
              <Menu.Item key={`sub-item-${subKey}`}>
                {icon && icon}
                {to ? <Link to={to}>{title}</Link> : title}
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
            <Menu.Item key={key}>
              {icon && icon}
              {to ? <Link to={to}>{title}</Link> : title}
            </Menu.Item>
          )
      )}
    </Menu>
  )
}

export const MenuLink = styled(Link)``
