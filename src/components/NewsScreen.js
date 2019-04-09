import React, { Component, ListItem } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';

import { takeData } from '../actions/dataAction';

class NewsScreen extends Component {
  componentDidMount() {
    this.props.onOpen();
  }
  render() {
    if (!this.props.state.dataGet.data) {
      return <h1>Loading...</h1>;
    }
    const data = this.props.state.dataGet.data.slice(0, 50);
    const Items = data.map((item) => (
      <Card key={item.id}>
        <Image src="{/images/avatar/large/matthew.png}" />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    ));

    return <div>{Items}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    onOpen: () => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => dispatch(takeData(json)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
