import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuChange } from '../actions/menuAction';

class HeaderMenu extends Component {
  state = {};

  render() {
    var activeItem = this.props.state.menuChange.place;
    return (
      <Menu>
        <Menu.Item>
          <Link to="/">
            <Button name="main" active={activeItem === 'main'} onClick={() => this.props.handleItemClick('main')}>
              Main
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">
            <Button name="login" active={activeItem === 'login'} onClick={() => this.props.handleItemClick('login')}>
              Log-in
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/news">
            <Button name="news" active={activeItem === 'news'} onClick={() => this.props.handleItemClick('news')}>
              News
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">
            <Button
              name="profile"
              active={activeItem === 'profile'}
              onClick={() => this.props.handleItemClick('profile')}
            >
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
    handleItemClick: (place) => {
      dispatch(menuChange(place));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
