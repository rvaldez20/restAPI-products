const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Cada Pedido va tener un cliente
 * El cliente hace referencia hacia la coleecion Cliente
 * 
 */

const pedidosSchema = new Schema({
   cliente: {
      type: Schema.ObjectId,
      ref: 'Clientes'
   },
   producto: [{
      producto: {
         type: Schema.ObjectId,
         ref: 'Productos'
      },
      cantidad: Number
   }],
   total: {
      type: Number
   }
});

module.exports = mongoose.model('Pedidos', pedidosSchema);