const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
},
  {
    timestamps: true,
  });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;