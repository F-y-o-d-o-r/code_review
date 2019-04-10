import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';

class ProfileScreen extends React.Component {
  render() {
    const { login } = this.props.state.logging;
    if (!login) {
      return <Redirect to={'/login'} />;
    }
    return (
      <Card>
        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header>Admin</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a target="_blank" href="http://fyodor.pp.ua">
            http://fyodor.pp.ua
          </a>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state
});

export default connect(mapStateToProps)(ProfileScreen);
