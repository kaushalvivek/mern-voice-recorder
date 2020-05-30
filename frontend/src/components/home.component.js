import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3>Welcome to this application! </h3>

        <p>We are going to ask you a few questions and you can answer them using your voice.</p>
      </div>
    );
  }
}