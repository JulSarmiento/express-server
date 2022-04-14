const Container = require('../classes/container.class');

const product = new Container('products');

const message = new Container('messages');

async function productsSockets(socket){
  console.log('Un cliente se ha conectado');

  const products = await product.getAll();
  socket.emit('products', products);

  const messages = await message.getAll();
  socket.emit('messages', messages);
}




module.exports = productsSockets;


