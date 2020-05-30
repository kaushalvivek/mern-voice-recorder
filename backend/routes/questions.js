const router = require('express').Router();
let Question = require('../models/question.model');

// route to get all
router.route('/').get((req, res) => {
  Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to add new
router.route('/add').post((req, res) => {
  const number = req.body.number;
  const text = req.body.text;
  const answered = req.body.answered;
  const newQuestion = new Question({ number, text, answered });

  newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to get by id
router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:_id').post((req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      question.number = req.body.number;
      question.text = req.body.text;

      question.save()
        .then(() => res.json('question updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;