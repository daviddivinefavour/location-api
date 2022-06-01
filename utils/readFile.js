const fs = require('fs').promises;

async function getFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    return JSON.parse(data)
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}



module.exports = getFile;