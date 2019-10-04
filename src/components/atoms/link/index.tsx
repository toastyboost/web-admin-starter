import * as React from 'react'

import { LinkWrap } from './styles'

interface ILinkCompProps {
  children?: React.ReactNode | null
  onClick?: () => void
  className?: string
  to: string
}

export const Link: React.FC<ILinkCompProps> = ({ className, children, to, onClick }) => {
  return (
    <LinkWrap className={className} to={to} onClick={onClick}>
      {children}
    </LinkWrap>
  )
}
