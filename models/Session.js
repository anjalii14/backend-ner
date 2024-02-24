const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  uploadedFile: { type: Buffer }, // Store file data as a buffer
  annotations: [{ type: Object, default: [] }],
  currentSentenceIndex: { type: Number, default: 0 },
  userDefinedTags: [String] // Store user-defined tags as an array of strings
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
