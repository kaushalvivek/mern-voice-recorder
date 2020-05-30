import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login.component.js';
import Main from './components/main.component.js';

const MainComp = <div className="container"><Main /></div>;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: ""
    }
    this.signedIn = this.signedIn.bind(this);
  }

  signedIn = (user) => {
    this.setState({
      signedIn: true,
      user: user
    });
    console.log("In signed in")
  }


  render() {
    if (this.state.isSignedIn === true) {
      return MainComp;
    }
    else {
      return (
        <div className="container">
          <Login signedIn={this.singnedIn} />
        </div>
      )
    }
  };
}