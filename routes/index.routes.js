const express = require('express');
const router = express.Router();
const clienteController =  require('../controllers/clienteController');

module.exports = function() {
   // Agrega nuevos clientes vos POST
   router.post('/clientes', clienteController.nuevoCliente);

   // Obtener todos los clientes
   router.get('/clientes', clienteController.mostrarClientes);
   
   return router;
}

