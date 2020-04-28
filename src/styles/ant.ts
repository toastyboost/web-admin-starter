import { createGlobalStyle } from 'styled-components';

export const AntStylesOveride = createGlobalStyle`
   .ant-layout {
    min-height: 100vh;
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: 100%;
  }
`;
