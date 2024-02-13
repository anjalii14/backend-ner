const express = require('express');
const router = express.Router();
const jsonController = require('..\controllers\jsonController');

// Route to export data to JSON file
router.post('/export', jsonController.exportToJson);

const sentenceController = require('..\controllers\sentenceController');

// Route to import text file
router.post('/import', async (req, res) => {
  try {
    const filePath = req.file.path;
    const result = await jsonController.importFromTxt(filePath);
    res.status(200).json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
