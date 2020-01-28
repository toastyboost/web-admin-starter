import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const MainContainer = styled(Content)`
  background-color: #fff;
  padding: 24px;
  min-height: calc(100vh - 128px);
`;
