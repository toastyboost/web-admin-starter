import * as React from 'react'
import { Layout } from 'antd'

import { Header, Footer, Main } from 'ui/organisms'

type LandingLayoutProps = {
  children: React.ReactNode
}

export const GenericTemplate: React.FC<LandingLayoutProps> = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <Main>{children}</Main>
    </Layout>
    <Footer />
  </Layout>
)
