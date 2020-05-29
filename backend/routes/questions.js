const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req, res) => {
  Questions.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const text = req.body.text;
  const newQuestion = new Question({ text });

  newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;