const Session = require('../models/session');
// const Session = require('../models/Session')
// Create or update session
exports.createOrUpdateSession = async (req, res) => {
  try {
    const { userId, uploadedFile, annotations, currentSentenceIndex } = req.body;

    // Check if session exists for the user
    let session = await Session.findOne({ user: userId });

    if (!session) {
      // Create a new session if it doesn't exist
      session = new Session({
        user: userId,
        uploadedFile,
        annotations,
        currentSentenceIndex
      });
    } else {
      // Update the existing session if it exists
      session.uploadedFile = uploadedFile;
      session.annotations = annotations;
      session.currentSentenceIndex = currentSentenceIndex;
    }

    // Save the session
    await session.save();

    res.status(200).json({ success: true, message: 'Session created or updated successfully', session });
  } catch (error) {
    console.error('Error creating or updating session:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


// Get session by user ID
exports.getSessionByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const session = await Session.findOne({ user: userId });

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    res.json(session);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update session
exports.updateSession = async (req, res) => {
  try {
    const { userId, uploadedFile, annotations, currentSentenceIndex } = req.body;

    const session = await Session.findOne({ user: userId });

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    session.uploadedFile = uploadedFile;
    session.annotations = annotations;
    session.currentSentenceIndex = currentSentenceIndex;

    await session.save();

    res.json(session);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete session
exports.deleteSession = async (req, res) => {
  try {
    const userId = req.params.userId;

    const session = await Session.findOne({ user: userId });

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    await session.remove();

    res.json({ message: 'Session deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all sessions
exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();

    res.json(sessions);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get session by ID
exports.getSessionById = async (req, res) => {
  try {
    const sessionId = req.params.sessionId;

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    res.json(session);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update session by ID
exports.updateSessionById = async (req, res) => {
  try {
    const sessionId = req.params.sessionId;
    const { uploadedFile, annotations, currentSentenceIndex } = req.body;

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    session.uplxoadedFile = uploadedFile;
    session.annotations = annotations;
    session.currentSentenceIndex = currentSentenceIndex;

    await session.save();

    res.json(session);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

