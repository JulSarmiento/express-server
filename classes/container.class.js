const fs = require('fs');
const readFile = require('../utilities/readFile');
const saveFile = require('../utilities/savefiles');

/**
 * Product Class
 */
class Container{
  constructor(filename){
    this._filename = `db/${filename}.txt`

  }

  /**
   * Recive a new object, save current element in file 
   * 
   * @param {object} data
   */
  async save(data){

    const array = await this.getAll();
    
    data.id = array.length > 0 ? array[array.length - 1].id + 1 : 1;
    
    try{
      array.push(data);

      saveFile(this._filename, array)
      
      return data.id

    } catch (err) {
      console.log(`No fue posible agregar el producto, ${err} `);
    }
    
  }

    /**
   * Get element by Id
   * 
   * @param {number} id 
   * @returns {Object} element
   */
  async getById(id){

    try{
      const array = await readFile(this._filename);

      return array.find(Element => Element.id === id) ;

    } catch (err){
      console.log(err);
    }

  }

  /**
   * List all elements
   * 
   * @returns {Array<Object>} elements
   */
  getAll(){
    return readFile(this._filename);  
  }

  /**
   * This function returns the object based in a random id.
   * 
   * @returns object
   */
  async getRandom(){
    const array = await this.getAll();
    const random = Math.round(Math.random()* array.length )

    return this.getById(random);
  }


  /**
   * Delete elemet by Id
   * 
   * @param {number} id 
   */
  async deleteById(id){

    const array = await readFile(this._filename);
    
    saveFile(this._filename, array.filter(el => el.id !== id))
  }


  /**
   * Removes all saved elements
   */
  async deleteAll(){
    try{
      const data = await fs.promises.writeFile(this._filename, '');

    } catch (err) {
      console.log(err);
    }
  }
  
}

module.exports = Container;