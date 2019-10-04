import React from 'react'
import { Layout } from 'antd'

import { Header, Footer, Aside, Main } from 'components/sections'

type LandingLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout: React.FC<LandingLayoutProps> = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <Aside />
      <Main>{children}</Main>
    </Layout>
    <Footer />
  </Layout>
)
