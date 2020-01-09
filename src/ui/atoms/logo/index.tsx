import * as React from 'react'

import { LogoContanter, LogoIcon } from './styles'

type LogoProps = {
  to: string
}

export const Logo: React.FC<LogoProps> = ({ to }) => {
  return (
    <LogoContanter to={to}>
      <LogoIcon type="robot" /> WEB
    </LogoContanter>
  )
}
