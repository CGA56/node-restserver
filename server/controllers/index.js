/*
  CONTROLADOR DE RUTAS 
*/

const express = require('express');
const app = express();

app.use(require('../controllers/login.js'));
app.use(require('../controllers/usuario.js'));


module.exports = app;