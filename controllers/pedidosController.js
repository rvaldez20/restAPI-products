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

// Muestra un pedido por su ID
exports.mostrarPedido = async (req, res, next) => {
   try {
      const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
         path: 'pedido.producto',
         model: 'Productos'
      });

      // Verificamos si existe el pedido
      if(!pedido){
         res.json({mensaje: 'Ese pedido no existe'});
         return next();
      }

      // Mostramos el pedido
      res.json(pedido);
   } catch (error) {
      console.log(error);
      next();
   }
}

exports.actualizarPedido = async (req, res, next) => {
   try {
      let pedido = await Pedidos.findOneAndUpdate({ _id: req.params.idPedido }, req.body, {
         new: true
      }).populate('cliente').populate({
         path: 'pedido.producto',
         model: 'Productos'
      });

      res.json(pedido);
   } catch (error) {
      console.log(error);
      next();
   }
}

exports.eliminarPedido = async (req, res, next) => {
   try {
      await Pedidos.findOneAndDelete({ _id: req.params.idPedido });
      res.json({ mensaje: 'El pedido ha sido eliminado' })
   } catch (error) {
      console.log(error);
      next();
   }
}