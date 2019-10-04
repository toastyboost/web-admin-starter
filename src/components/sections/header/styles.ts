import styled from 'styled-components'
import { Layout, Button } from 'antd'

const { Header } = Layout

export const HeaderContainer = styled(Header)`
  display: flex;
  align-items: center;
`

export const LogoutButton = styled(Button)`
  margin-left: auto;
`
