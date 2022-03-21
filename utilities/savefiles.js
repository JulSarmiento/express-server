const fs = require('fs');

/**
 * This function rewrite the original file after updates
 * 
 * @param {string} file 
 * @param {array} array 
 * @returns the file saved
 */
async function saveFile(file, array) {
  try{

    return await fs.promises.writeFile(file, JSON.stringify(array, null, 2))

  } catch (err) {

    console.log(`Error de lectura: ${err}`);
  }

}

module.exports = saveFile