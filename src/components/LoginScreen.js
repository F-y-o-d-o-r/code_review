import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loginCheck, logout } from '../actions/loginAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      name: '',
      pass: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ pass: '', name: '' });

  render() {
    const { name, pass } = this.state;
    const { login, error } = this.props.state.logging;
    return (
      <Segment placeholder>
        {!login ? (
          <Form onSubmit={() => this.props.handleSubmit(this.state.name, this.state.pass, this.props.history)}>
            <Form.Group>
              <Form.Field>
                <label>Name</label>
                <Form.Input placeholder="Name" name="name" value={name} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input placeholder="pass" name="pass" value={pass} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label style={{ opacity: 0 }}>Login</label>
                <Form.Button content="Login" />
              </Form.Field>
            </Form.Group>
            <h6>{error}</h6>
            <span>HINT: Admin - 12345</span>
          </Form>
        ) : (
          <Form onSubmit={() => this.props.handleSubmitLogout()}>
            <Form.Group>
              <Form.Field>
                <label style={{ opacity: 0 }}>Logout</label>
                <Form.Button content="Logout" />
              </Form.Field>
            </Form.Group>
          </Form>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (name, pass, history) => {
      dispatch(loginCheck(name, pass, history));
    },
    handleSubmitLogout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
