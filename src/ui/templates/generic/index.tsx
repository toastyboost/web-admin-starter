import * as React from 'react';
import { Layout } from 'antd';

import { Header, Footer, Main } from 'ui/organisms';
import { useAuth } from 'features/user';

export const GenericTemplate: React.FC = ({ children }) => {
  const isAuth = useAuth();

  return isAuth ? (
    <Layout>
      <Header />
      <Layout>
        <Main>{children}</Main>
      </Layout>
      <Footer />
    </Layout>
  ) : (
    <Layout>{children}</Layout>
  );
};
