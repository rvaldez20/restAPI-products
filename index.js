const express = require('express');
const routes = require('./routes/index.routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//conectar con mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
});

// crea el servidor
const app = express();

// habilitamos el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// rutas de la app
app.use('/', routes());



// puerto
app.listen(5000);