const fs = require('fs');
const natural = require('natural');
const readline = require('readline');
const Sentence = require('../models/Sentence');

exports.exportToJson = async (req, res) => {
  try {
    const data = req.body; // Assuming data is passed in the request body

    // Convert data to JSON string
    const jsonData = JSON.stringify(data);

    // Write JSON data to a file
    fs.writeFile('exported_data.json', jsonData, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to export data' });
      } else {
        console.log('Data exported successfully');
        res.status(200).json({ message: 'Data exported successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// const readline = require('readline');


exports.importFromTxt = async (filePath) => {
  return new Promise((resolve, reject) => {
    // Create a readline interface
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity // Treats each line as a separate sentence
    });

    // Array to store all sentences
    const sentences = [];

    // Read each line and push it to the sentences array
    rl.on('line', (line) => {
      sentences.push({ text: line });
    });

    // Event listener for close event
    rl.on('close', async () => {
      try {
        // Store sentences in the database
        await Sentence.insertMany(sentences);
        resolve('Sentences imported successfully.');
      } catch (error) {
        reject('Failed to import sentences.');
      }
    });
  });
};
