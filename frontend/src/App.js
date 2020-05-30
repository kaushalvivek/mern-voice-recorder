import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login.component.js';
import Main from './components/main.component.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: {}
    }
  }

  signedIn = (user) => {
    this.setState({
      isSignedIn: true,
      user: user
    });
  }


  render() {
    if (this.state.isSignedIn === true) {
      return (
        <div className="container"><Main user={this.state.user.username} /></div>
      )
    }
    else {
      return (
        <div className="container">
          <Login onSignIn={this.signedIn} />
        </div>
      )
    }
  };
}