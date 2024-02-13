// models/Tag.js
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Tag', tagSchema);
