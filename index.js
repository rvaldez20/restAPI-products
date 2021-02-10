const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Cors permite que un cliente se conecte a otro servidor para el intercambio de recuersos
const cors = require('cors');

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

// Habilitamos cors
app.use(cors());

// rutas de la app
app.use('/', routes());

// se define directorio static
app.use(express.static('uploads'));

// habilitamos morgan
app.use(morgan('dev'));

// puerto
app.listen(5000, () => {
   console.log('Listen on Port 5000');
});