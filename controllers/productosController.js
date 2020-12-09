const Productos = require('../models/Productos');

// Agrega un nuevo producto
exports.nuevoProducto = async (req, res, next) => {
   // TEST: console.log(req.body);

   // creamos el objeto con el modelo de mogoose
   const producto = new Productos(req.body);

   try {
      await producto.save();
      res.json({mensaje: 'Se agrego un nuevo producto'});
   } catch (error) {
      console.log(error);
      next();
   }
}