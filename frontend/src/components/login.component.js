import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

  handleSubmit = () => {
    var user = null;
    user = this.state.users.find(user => user.username == this.state.username);
    if (user == null)
      console.log('No such user')

    else if (user.password == this.state.password) {
      this.props.signedIn(user);
    }
    else
      console.log("incorrect password")
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h2> Login</h2>
        <Form>
          <Form.Group controlId="Username">
            <Form.Control
              value={this.state.username}
              onChange={this.handleUsernameChange}
              type="text"
              placeholder="Enter username"
              style={{ width: "300px" }} />
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Control
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
              placeholder="Enter password"
              style={{ width: "300px" }} />
          </Form.Group>

          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
        </Form.Text>
          <Button variant="light" onClick={this.handleSubmit} style={{ width: "300px" }}>
            Submit
      </Button>
        </Form>
      </div>
    );
  }
}