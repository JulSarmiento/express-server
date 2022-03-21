const fs = require('fs');

/**
 * This function read the file.
 * 
 * @param {string} file 
 * @returns the parsed data
 */
async function readFiles(file) {
  try{

    const data = await fs.promises.readFile(file, 'utf-8');

    return !data ? [] : JSON.parse(data);

  } catch (err) {

    console.log(`Error de lectura: ${err}`);
  }
}


module.exports = readFiles;