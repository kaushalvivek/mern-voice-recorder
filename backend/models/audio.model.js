const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const audioSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;