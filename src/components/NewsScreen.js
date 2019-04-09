import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';

import { takeData } from '../actions/dataAction';

class NewsScreen extends Component {
  componentDidMount() {
    this.props.onOpen();
  }
  render() {
    if (!this.props.state.dataGet.data) {
      return <h1>Loading...</h1>;
    }
    const data = this.props.state.dataGet.data.slice(0, 51);
    const Items = data.map((item) => (
      <Card key={item.id}>
        <Image src={item.url} />
        <Card.Content>
          <Card.Description>{item.title}</Card.Description>
        </Card.Content>
      </Card>
    ));

    return <div className="news-wrapper">{Items}</div>;
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
