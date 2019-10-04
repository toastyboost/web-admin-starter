import React from 'react'

import { FooterContainer } from './styles'

const todayYear = new Date().getFullYear()

export const Footer: React.FC = () => <FooterContainer>RMR © 2012 – {todayYear}</FooterContainer>
