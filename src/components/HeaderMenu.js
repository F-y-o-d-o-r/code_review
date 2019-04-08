import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class HeaderMenu extends Component {
  state = {
    activeItem: 'main'
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    console.log(this.props);
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
          <Link to="/login/">
            <Button name="login" active={activeItem === 'login'} onClick={this.handleItemClick}>
              Log-in
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/news/">
            <Button name="news" active={activeItem === 'news'} onClick={this.handleItemClick}>
              News
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile/">
            <Button name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick}>
              Profile
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
