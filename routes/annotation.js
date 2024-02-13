// routes/annotationRoutes.js
const express = require('express');
const router = express.Router();
const annotationController = require('..\controllers\annotationController');

// Route to create an annotation
router.post('/', annotationController.createAnnotation);

// Route to select a tag for a word in a sentence
router.put('/:sentenceId/select-tag', annotationController.selectTag);

module.exports = router;
