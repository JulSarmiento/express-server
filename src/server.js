// AQUI VA LA APP DE EXPRESS
const express = require('express');

const {Server: IOServer, Socket} = require('socket.io');
const {Server: HttpServer} = require('http');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// import the routes
const routes = require('../routes');

// import socket function
const productSockets = require('../sockets/product.socket');

// Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting the template, in this case: pug.
app.set("view engine", "pug");
app.set('views', './views');

// call the html
app.use(express.static('./public'));

// Setting the homepage
app.get('/', (req, res) => {
  res.render('home');
});

io.on('connection', productSockets);

app.set('socketio', io);

// product`s routes
app.use('/api', routes);
app.use('/templates', require('../routes/templates'));

// const PATH = process.env.PORT || 8080

httpServer.listen(8080, () => console.log('SERVER ON'));

module.exports = io