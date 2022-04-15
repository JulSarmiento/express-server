// aqui van las funciones y el res y req

const Container = require('../classes/container.class');
const db = 'messages';

const message = new Container(db);

// add new message
exports.save = async function(req, res) {

  const body = {...req.body, date: new Date().toDateString()}

  const created = await message.save(body);

  const socket = req.app.get('socketio');

  const messages = await message.getAll();
  socket.emit('messages', messages);

  res.json(created);
}

// return all messages
exports.getAll = async function(req, res) {
  res.json(await message.getAll());
}








