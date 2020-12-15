const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
   nombre: {
      type: String,
      trim: true
   },
   precio: {
      type: Number
   },
   imagen: {
      type: String
   }
},{
   timestamps: true
});

module.exports = mongoose.model('Productos', ProductosSchema);