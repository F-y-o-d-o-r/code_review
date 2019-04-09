import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

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
    return (
      <Segment placeholder>
        <Form onSubmit={() => this.props.handleSubmit(this.state.name, this.state.pass)}>
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
              <label style={{ opacity: 0 }}>Submit</label>
              <Form.Button content="Submit" />
            </Form.Field>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (name, pass) => {
      console.log(name, pass);
      // thiss.setState({ pass: '', name: '' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
