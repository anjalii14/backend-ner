// controllers/annotationController.js
const Annotation = require('../models/Annotation');

const Annotation = require('../models/Annotation');

exports.createAnnotation = async (req, res) => {
  try {
    // Extract data from request body
    const { sentenceId, entities } = req.body;

    // Create a new annotation entry
    const annotation = new Annotation({
      sentence: sentenceId,
      entities: entities.map(entity => ({
        start: entity.start,
        end: entity.end,
        tag: entity.tag
      }))
    });

    // Save the annotation to the database
    await annotation.save();

    res.status(201).json({ message: 'Annotation created successfully', annotation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.selectTag = async (req, res) => {
  try {
    const { sentenceId, wordIndex, tag } = req.body;

    // Find the annotation for the given sentence
    let annotation = await Annotation.findOne({ sentence: sentenceId });

    if (!annotation) {
      return res.status(404).json({ error: 'Annotation not found' });
    }

    // Update the tag for the specified word index
    annotation.entities[wordIndex].tag = tag;

    // Save the updated annotation
    await annotation.save();

    res.status(200).json({ message: 'Tag selected successfully', annotation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
