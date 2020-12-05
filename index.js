const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index.routes');

//conectar con mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

// crea el servidor
const app = express();

// rutas de la app
app.use('/', routes());



// puerto
app.listen(5000);