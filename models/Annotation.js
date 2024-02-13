// models/Annotation.js
const mongoose = require('mongoose');

const annotationSchema = new mongoose.Schema({
  sentence: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sentence',
    required: true,
  },
  entities: [{
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    tag: { type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }
  }]
});

module.exports = mongoose.model('Annotation', annotationSchema);
