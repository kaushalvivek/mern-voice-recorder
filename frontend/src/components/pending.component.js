import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const Questions = props => (
  props.questions.map(question => {
    return (
      < Card >
        <Card.Body>
          <Card.Title>Q{question.number} : {question.text}</Card.Title>
          {/* <Card.Text>
            {question.text}
          </Card.Text> */}
          <Link to={"/question/" + question._id}>
            <Button variant="primary">Answer</Button>
          </Link>
        </Card.Body>
      </Card >
    );
  })
)

export default class Pending extends Component {




  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/questions/')
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="container">
        <Questions questions={this.state.questions} />
      </div>
    );
  }
}