// AQUI VA LA APP DE EXPRESS
const express = require('express');
const app = express();

// import the routes
const routes = require('./routes');

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// call the html
app.use(express.static('public'));

// product`s routes
app.use('/api', routes);

const PATH = process.env.PORT || 8080

const server = app.listen(PATH, () => {
  console.log(`El servidor HTTP en el puerto ${PATH} funcionando correctamente.`);
});

server.on('error', error => console.log(`Error en el servidor ${error}.`));
