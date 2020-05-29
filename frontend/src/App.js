import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component.js';
import Pending from './components/pending.component.js';
import Answered from './components/answered.component.js';
import Login from './components/login.component.js';
import Help from './components/help.component.js';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Login} />
        <Route path="/pending" component={Pending} />
        <Route path="/answered" component={Answered} />
        <Route path="/help" component={Help} />
      </div>
    </Router>
  );
}

export default App;