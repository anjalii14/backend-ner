// controllers/sentenceController.js
const Sentence = require('../models/Sentence');

exports.getCurrentSentence = async (req, res) => {
  try {
    const currentIndex = parseInt(req.query.currentIndex) || 0;
    const sentence = await Sentence.findOne().skip(currentIndex).exec();
    if (!sentence) {
      return res.status(404).json({ error: 'Sentence not found' });
    }
    res.status(200).json({ sentence, currentIndex });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getNextSentence = async (req, res) => {
  try {
    const currentIndex = parseInt(req.query.currentIndex) || 0;
    const nextIndex = currentIndex + 1;
    const sentence = await Sentence.findOne().skip(nextIndex).exec();
    if (!sentence) {
      return res.status(404).json({ error: 'No next sentence available' });
    }
    res.status(200).json({ sentence, currentIndex: nextIndex });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPreviousSentence = async (req, res) => {
  try {
    const currentIndex = parseInt(req.query.currentIndex) || 0;
    if (currentIndex <= 0) {
      return res.status(404).json({ error: 'No previous sentence available' });
    }
    const previousIndex = currentIndex - 1;
    const sentence = await Sentence.findOne().skip(previousIndex).exec();
    if (!sentence) {
      return res.status(404).json({ error: 'Sentence not found' });
    }
    res.status(200).json({ sentence, currentIndex: previousIndex });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
