// aqui van las funciones y el res y req

const Container = require('../classes/container.class');
const db = 'products';

const product = new Container(db);

// add new product
exports.save = async function(req, res, next) {
  res.json(await product.save(req.body));
}

// return all products
exports.getAll = async function(req, res, next) {
  res.json(await product.getAll());
}

// return one product by its id
exports.getById = async function(req, res, next){
  const {id} = req.params

  const current = await product.getById(id);
  if (current) {
    return res.json(current);
  }
  res.status(400).json({error: `El producto con id ${id} no existe`})
}

// return a random product
exports.getRandom = async function(req, res, next){
  res.json(await product.getRandom());  
}

// update an existen product
exports.update = async function(req, res, next){
  const {id} = req.params;
  res.json(await product.update(id, req.body));
}

// delete all the products
exports.deleteAll = async function(req, res, next) {
  res.json(await product.deleteAll());
}

// delete an existen product by its id
exports.deleteById = async function(req, res, next){
  const {id} = req.params;  
  res.json(await product.deleteById(id));
}







