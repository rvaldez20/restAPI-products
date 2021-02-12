const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
const usuariosController = require('../controllers/usuariosController');

// middleware para proteger las rutas
const auth = require('../middlewares/auth');

module.exports = function() {

   /************************** CLIENTES *******************************/

   // Agrega nuevos clientes vos POST
   router.post('/clientes', 
      auth,
      clienteController.nuevoCliente
   );

   // Obtener todos los clientes
   router.get('/clientes', 
      auth,
      clienteController.mostrarClientes
   );

   // Obtener un cliente en especifico(ID)
   router.get('/clientes/:idCliente', 
      auth,
      clienteController.mostrarCliente
   );

   // Actualizar un cliente por ID
   router.put('/clientes/:idCliente', 
      auth,
      clienteController.actualizarCliente
   );

   // Eliminar un cliente por ID
   router.delete('/clientes/:idCliente', 
      auth,
      clienteController.eliminarCliente
   );




  /************************** PRODUCTOS *******************************/

   // Agrega un nuevo producto
   router.post('/productos',
      auth,
      productosController.subirArchivo,
      productosController.nuevoProducto
   );

   // Muestra todos los productos
   router.get('/productos', 
      auth,
      productosController.mostrarProductos
   );

   // Muestra un producto especifico por ID
   router.get('/productos/:idProducto', 
      auth,
      productosController.mostrarProducto
   );

   // Actualizar un productos por ID
   router.put('/productos/:idProducto', 
      auth,
      productosController.subirArchivo,
      productosController.actualizarProducto
   );

   // Elimina un producto pro ID
   router.delete('/productos/:idProducto', 
      auth,
      productosController.eliminarProducto
   );

   // Busqueda de producto
   router.post('/productos/busqueda/:query', 
      // auth,
      productosController.buscarProducto
   );


   /************************** PEDIDOS *******************************/


   // crea un nuevo pedido
   router.post('/pedidos', 
      auth,
      pedidosController.nuevoPedido
   );

   // Muestra todos los pedidos
   router.get('/pedidos', 
      auth,
      pedidosController.mostrarPedidos
   );

   // Mostrar un pedido con su ID
   router.get('/pedidos/:idPedido', 
      auth,
      pedidosController.mostrarPedido
   );

   // Actualizar un pedido
   router.put('/pedidos/:idPedido', 
      auth,
      pedidosController.actualizarPedido
   );

   // Eliminar un pedido
   router.delete('/pedidos/:idPedido', 
      auth,
      pedidosController.eliminarPedido
   );


   /************************** USUARIOS *******************************/

   //Para crear la cuenta
   router.post('/crear-cuenta',
      usuariosController.registrarUsuario
   );

   router.post('/iniciar-sesion', 
      usuariosController.autenticarUsuario
   );

   
   return router;
}

   
 