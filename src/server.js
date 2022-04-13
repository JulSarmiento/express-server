// AQUI VA LA APP DE EXPRESS
const express = require('express');

const {Server: IOServer} = require('socket.io');
const {Server: HttpServer} = require('http');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// import the routes
const routes = require('../routes');

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting the template, in this case: pug.
app.set("view engine", "pug");
app.set('views', './views');

// call the html
app.use(express.static('./public'));

// Setting the homepage
app.get('/', (req, res) => {
  res.render('home');
});

io.on('connection', function(socket) {
  console.log('Un cliente se ha conectado');
  // socket.emit('products', products);

  // socket.on('new-message', message => {
  //   messages.push(message);
  //   io.sockets.emit('messages', messages);
  // })
});

// product`s routes
app.use('/api', routes);

// const PATH = process.env.PORT || 8080

httpServer.listen(8080, () => console.log('SERVER ON'));