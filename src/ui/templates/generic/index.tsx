import * as React from 'react';
import { Layout, Spin } from 'antd';

import { Header, Footer, Main } from 'ui/organisms';
import { absoluteCenterPosition } from 'lib/constants';

type GenericTemplateProps = {
  isAuthed: boolean;
  isPending: boolean;
}

export const GenericTemplate: React.FC<GenericTemplateProps> = ({
  children,
  isAuthed,
  isPending
}) => {

  if (isPending && !isAuthed) {
    return <Spin size="large" spinning={isPending} style={absoluteCenterPosition} />
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
