import * as React from 'react';
import { Layout, Spin } from 'antd';

import { Header, Footer, Main } from 'ui/organisms';

type GenericTemplateProps = {
  isAuthed: boolean;
  isPending: boolean;
}

export const GenericTemplate: React.FC<GenericTemplateProps> = ({
  children,
  isAuthed,
  isPending
}) => {

  if (!isPending && isAuthed) {
    return <Spin size="large" spinning={isPending}></Spin>
  }

  return <Spin size="large" spinning={isPending}>
    {
      isAuthed ? (
        <Layout>
          <Header />
          <Layout>
            <Main>{children}</Main>
          </Layout>
          <Footer />
        </Layout>
      ) : (
          <Layout>{children}</Layout>
        )
    }
  </Spin>
};
