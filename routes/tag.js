// routes/tagRoutes.js
const express = require('express');
const router = express.Router();
const tagController = require('..\controllers\tagController');

// Route to create a tag
router.post('/', tagController.createTag);

// Route to remove a tag
router.delete('/:id', tagController.removeTag);

// Route to edit a tag
router.put('/:id', tagController.editTag);

module.exports = router;
