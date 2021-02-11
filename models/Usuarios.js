const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosShema = new Schema({
   email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true
   },
   nombre: {
      type: String,
      required: 'Agrega tu Nombre'      
   },
   password: {
      type: String,
      required: true
   }
});

module.exports = mongoose.model('Usuarios', UsuariosShema);
