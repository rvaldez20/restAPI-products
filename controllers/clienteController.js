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


// mustra todos los clientes
exports.mostrarClientes = async (req, res, next) => {
   try {
      const clientes =  await Clientes.find({});
      res.json(clientes);      
   } catch (error) {
      console.log(error);
      next();
   }
}


// Muestra un cliente especifico por ID
exports.mostrarCliente = async (req, res, next) => {
   const cliente = await Clientes.findById(req.params.id);
   console.log(cliente);

   if(!cliente){
      res.json({mensaje: 'Ese cliente no existe'});
      return next();
   }

   res.json(cliente);
}