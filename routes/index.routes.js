const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');

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
   router.post('/productos',
      productosController.subirArchivo,
      productosController.nuevoProducto
   );

   // Muestra todos los productos
   router.get('/productos', productosController.mostrarProductos);

   // Muestra un producto especifico por ID
   router.get('/productos/:idProducto', productosController.mostrarProducto);

   // Actualizar un productos por ID
   router.put('/productos/:idProducto', 
      productosController.subirArchivo,
      productosController.actualizarProducto
   );

   // Elimina un producto pro ID
   router.delete('/productos/:idProducto', productosController.eliminarProducto);


   /** PEDIDOS */


   // crea un nuevo pedido
   router.post('/pedidos', pedidosController.nuevoPedido);

   // Muestra todos los pedidos
   router.get('/pedidos', pedidosController.mostrarPedidos);

   // Mostrar un pedido con su ID
   router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

   // Actualizar un pedido
   router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

   
   return router;
}

   
 