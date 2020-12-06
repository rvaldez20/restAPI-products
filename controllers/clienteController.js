const Clientes = require('../models/Clientes');

// Agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
   // TEST: console.log(req.body);

   // creamos el objeto con el modelo de mogoose
   const cliente = new Clientes(req.body);

   try {
      // si no hay error se guarda en al db
      await cliente.save();
      res.json({mensaje: 'Se agrego un nuevo cliente'});
   } catch (error) {
      // si hay error, mostramos error y next
      console.log(error);
      next();
   }
}