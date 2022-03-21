// AQUI VA LA APP DE EXPRESS
const express = require('express');
const app = express();

const routes = require('./routes');

app.use(routes);

const PATH = process.env.PORT || 8080

const server = app.listen(PATH, () => {
  console.log(`El servidor HTTP en el puerto ${PATH} funcionando correctamente.`);
});

server.on('error', error => console.log(`Error en el servidor ${error}.`));
