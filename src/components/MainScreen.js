import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const MainScreen = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="users" circular />
      <Header.Content>Hello</Header.Content>
    </Header>
  </div>
);

export default MainScreen;
