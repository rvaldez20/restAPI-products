const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');

module.exports = function() {
   /** CLIENTES */

   // Agrega nuevos clientes vos POST
   router.post('/clientes', clienteController.nuevoCliente);

   // Obtener todos los clientes
   router.get('/clientes', clienteController.mostrarClientes);

   // Obtener un cliente en especifico(ID)
   router.get('/clientes/:idCliente', clienteController.mostrarCliente);

   // Actualizar un cliente por ID
   router.put('/clientes/:idCliente', clienteController.actualizarCliente);

   // Eliminar un cliente por ID
   router.delete('/clientes/:idCliente', clienteController.eliminarCliente);


   /** PRODUCTOS */

   // Agrega un nuevo producto
   router.post('/productos', productosController.nuevoProducto);
   
   return router;
}

