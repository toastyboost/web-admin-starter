import * as React from 'react';
import { Button, Checkbox, Typography } from 'antd';

import { Form, Input } from 'ui/atoms';

import { submitLogin, loginStore, passStore } from './model';
import { Container, Actions, Rember } from './styles';

const fields = {
  login: {
    placeholder: 'Login',
    icon: 'user',
    name: 'login',
  },
  pass: {
    placeholder: 'Password',
    icon: 'lock',
    name: 'password',
  },
};

export const LoginPage: React.FC = () => (
  <Container>
    <Typography.Title level={4}>Authentication</Typography.Title>
    <Form handleSubmit={submitLogin}>
      <Input store={loginStore} config={fields.login} />
      <Input store={passStore} config={fields.pass} />
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
