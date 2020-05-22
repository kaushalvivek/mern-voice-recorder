const router = require('express').Router();
let Audio = require('../models/audio.model');

// route to get all
router.route('/').get((req, res) => {
  Audio.find()
    .then(audios => res.json(audios))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to add new
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const filepath = req.body.filepath;
  const question = req.body.duration;
  const date = Date.parse(req.body.date);

  const newAudio = new Audio({
    username,
    filepath,
    question,
    date,
  });

  newAudio.save()
    .then(() => res.json('Audio added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to get by id
router.route('/:id').get((req, res) => {
  Audio.findById(req.params.id)
    .then(audio => res.json(audio))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to delete by id
router.route('/:id').delete((req, res) => {
  Audio.findByIdAndDelete(req.params.id)
    .then(() => res.json('Audio deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:id').post((req, res) => {
  Audio.findById(req.params.id)
    .then(audio => {
      audio.username = req.body.username;
      audio.filepath = req.body.filepath;
      audio.question = req.body.question;
      audio.date = Date.parse(req.body.date);

      audio.save()
        .then(() => res.json('Audio updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;