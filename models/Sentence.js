// models/Sentence.js
const mongoose = require('mongoose');

const sentenceSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Sentence', sentenceSchema);
