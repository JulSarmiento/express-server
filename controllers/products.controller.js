// aqui van las funciones y el res y req

const Container = require('../classes/container.class');
const db = 'products';

const product = new Container(db);

exports.save = async function(req, res) {
  res.json(await product.save(req.body));
}

exports.getAll = async function(req, res) {
  res.json(await product.getAll());
}

exports.getById = async function(req, res){
  res.json(await product.getById(req.param.id));
}

exports.getRandom = async function(req, res){
  res.json(await product.getRandom());  
}

exports.deleteAll = async function(req, res) {
  res.json(await product.deleteAll());
}

exports.deleteById = async function(req, res){
  res.json(await product.deleteById(req.param.id));
}







