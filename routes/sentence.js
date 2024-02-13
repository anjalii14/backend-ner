// routes/sentenceRoutes.js
const express = require('express');
const router = express.Router();
const sentenceController = require('..\controllers\sentenceController.js');

// Route to get current sentence
router.get('/sentence/current', sentenceController.getCurrentSentence);

// Route to get next sentence
router.get('/sentence/next', sentenceController.getNextSentence);

// Route to get previous sentence
router.get('/sentence/previous', sentenceController.getPreviousSentence);


module.exports = router;
