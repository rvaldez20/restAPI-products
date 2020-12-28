const Pedidos = require('../models/Pedidos');

exports.nuevoPedido = async (req, res, next) => {

   const pedido = new Pedidos(req.body);
   try {
      // guardamos el pedido
      await pedido.save();
      res.json({ mensaje: 'Se agrego un nuevo pedido' });
   } catch (error) {
      console.log(error);
      next();
   }
}

// Muestra todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
   try {
      const pedidos = await Pedidos.find({}).populate('cliente').populate({
         path: 'pedido.producto',
         model: 'Productos'
      });
      res.json(pedidos);
   } catch (error) {
      console.log(error);
      next();
   }
}