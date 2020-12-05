const express = require('express');
const routes = require('./routes/index.routes')

// crea el servidor
const app = express();

// rutas de la app
app.use('/', routes());



// puerto
app.listen(5000);