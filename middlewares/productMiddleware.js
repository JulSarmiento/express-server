const Container = require('../classes/container.class');
const db = 'products';

const product = new Container(db);

async function productExist(req, res, next){

  const {id} = req.params

  const current = await product.getById(id);
  if (current) {
    req.product = current;
    return next();
  }

  res.status(400).json({error: `Producto no encontrado.`})
}

module.exports = productExist;