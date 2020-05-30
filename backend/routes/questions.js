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
  const newQuestion = new Question({ number, text });

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

module.exports = router;