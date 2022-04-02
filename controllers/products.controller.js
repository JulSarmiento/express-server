// aqui van las funciones y el res y req

const Container = require('../classes/container.class');
const db = 'products';

const product = new Container(db);

// add new product
exports.save = async function(req, res) {

  if(req.file){
    const thumbnail = `/uploads/${req.file.filename}`;
    return res.json(await product.save({...req.body, thumbnail}));
  }
}

// return all products
exports.getAll = async function(req, res) {
  res.json(await product.getAll());
}

// return one product by its id
exports.getById = async function(req, res){
  return res.json(req.product);
}

// return a random product
exports.getRandom = async function(req, res){
  res.json(await product.getRandom());  
}

// update an existen product
exports.update = async function(req, res){
  console.log('body',req.body);
  console.log('file',req.file);
   
  if(req.file){
    req.body.thumbnail = `/uploads/${req.file.filename}`
  } 

  const {id} = req.params;
  res.json(await product.update(id, req.body));
}

// delete all the products
exports.deleteAll = async function(req, res) {
  res.json(await product.deleteAll());
}

// delete an existen product by its id
exports.deleteById = async function(req, res){
  const {id} = req.params;  
  res.json(await product.deleteById(id));
}







