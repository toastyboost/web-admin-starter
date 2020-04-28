import * as React from 'react';
import styled from 'styled-components';

import { Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Form, Input } from 'ui/atoms';

import { submitForm, loginStore, passStore } from './model';

const fields = {
  login: {
    store: loginStore,
    config: {
      placeholder: 'Login',
      icon: 'user',
      name: 'login',
      prefix: <UserOutlined />,
    }
  },
  pass: {
    store: passStore,
    config: {
      placeholder: 'Password',
      name: 'password',
      prefix: <LockOutlined />,
    }
  },
};

export const LoginPage: React.FC = () => (
  <Container>
    <Typography.Title level={4}>Authentication</Typography.Title>
    <Form handleSubmit={submitForm}>
      <Input {...fields.login} />
      <Input {...fields.pass} />
      <Actions>
        <Rember>
          <Checkbox checked>Remember me</Checkbox>
          <div>Recover password</div>
        </Rember>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Actions>
    </Form>
  </Container>
);

const Container = styled.div`
  margin: auto;
  background-color: #fff;
  padding: 24px 24px 24px 24px;
  border-radius: 3px;

  h4 {
    text-align: center;
    padding-bottom: 8px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  button {
    width: 100%;
    height: 40px;
  }
`;

const Rember = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;
