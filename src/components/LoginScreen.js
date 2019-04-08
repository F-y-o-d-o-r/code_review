import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const Login = () => (
  <Segment placeholder>
    <Form>
      <Form.Input icon="user" iconPosition="left" label="Username" placeholder="Username" />
      <Form.Input icon="lock" iconPosition="left" label="Password" type="password" />
      <Button content="Login" primary />
    </Form>
  </Segment>
);

export default Login;
