import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Sign In</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/pending" className="nav-link">Pending Questions</Link>
            </li>
            <li className="navbar-item">
              <Link to="/answered" className="nav-link">Questions Answered</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}