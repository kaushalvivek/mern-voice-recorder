import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './navbar.component.js';
import Pending from './pending.component.js';
import Answered from './answered.component.js';
import Home from './home.component.js';
import Question from './question.component.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar user={this.props.user} />
          <br />
          <Route path="/home" exact component={Home} />
          <Route path="/pending" component={Pending} />
          <Route path="/answered" component={Answered} />
          <Route path="/question/:_id" component={Question} />
        </div>
      </Router>
    );
  }
}