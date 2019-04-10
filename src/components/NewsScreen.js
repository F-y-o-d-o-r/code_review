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
    return (
      <div className="news-wrapper" onLoad={console.log('loaded')}>
        {Items}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    onOpen: () => {
      dispatch(takeData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
