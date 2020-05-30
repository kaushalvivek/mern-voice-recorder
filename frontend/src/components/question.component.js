import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      number: '',
      text: ''
    }

  }

  componentDidMount() {
    axios.get('http://localhost:5000/questions/' + this.props.match.params._id)
      .then(response => {
        this.setState({
          id: response.data._id,
          number: response.data.number,
          text: response.data.text,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="container">
        Question {this.state.number} - {this.state.text}  - would be answered here.
      </div>
    );
  }
}