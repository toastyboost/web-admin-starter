import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type LogoProps = {
  to: string;
  icon?: React.ReactNode;
}

export const Logo: React.FC<LogoProps> = ({ to, icon }) => {
  return (
    <LogoContanter to={to}>
      {icon} WEB
    </LogoContanter>
  )
}

const LogoContanter = styled(Link)`
  text-transform: uppercase;
  font-weight: 900;
  position: relative;
  color: #fff;
`
