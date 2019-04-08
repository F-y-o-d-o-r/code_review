import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HeaderMenu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { activeItem: 'main' };
  // }
  componentDidMount() {
    let thisUrl = document.location.pathname.slice(1);
    this.setState({
      activeItem: thisUrl
    });
  }
  state = {
    activeItem: 'main'
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (name === 'news') {
      this.props.takeData();
    }
  };

  render() {
    console.log(this.props);
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item>
          <Link to="/">
            <Button name="main" active={activeItem === 'main'} onClick={this.handleItemClick}>
              Main
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">
            <Button name="login" active={activeItem === 'login'} onClick={this.handleItemClick}>
              Log-in
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/news">
            <Button name="news" active={activeItem === 'news'} onClick={this.handleItemClick}>
              News
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">
            <Button name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick}>
              Profile
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
});
const mapDispatchToProps = (dispatch) => {
  return {
    takeData: () => {
      dispatch({
        type: 'TAKE_DATA',
        data: 1
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
