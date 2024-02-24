const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
router.post('/', sessionController.createOrUpdateSession);
router.get('/user/:userId', sessionController.getSessionByUser);

module.exports = router;
