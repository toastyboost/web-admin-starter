import React from 'react'

import { VerticalMenu } from 'components/blocks'
import { AsideContainer } from './styles'

const menuData = [
  {
    title: 'Основное меню',
    icon: 'number',

    data: [
      {
        title: 'Подменю',
        to: '/'
      },
      {
        title: 'Другое подменю',
        to: '/'
      }
    ]
  }
]

const menuOptions = {
  defaultOpenKeys: ['sub-0'],
  defaultSelectedKeys: ['sub-item-1']
}

export const Aside: React.FC = () => {
  return (
    <AsideContainer width={250}>
      <VerticalMenu menuData={menuData} {...menuOptions} />
    </AsideContainer>
  )
}
