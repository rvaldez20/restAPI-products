// importamos el modelo Usuarios
const Usuarios = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.registrarUsuario = async (req, res) => {
   
   // leer los datos del usuario y colocalos en Usuatios
   const usuario = new Usuarios(req.body);
   usuario.password = await bcrypt.hash(req.body.password, 12);

   try {
      // se guada el usuario en la DB
      await usuario.save();
      res.json({ mensaje: 'Usuario Creado Correctamente' });
   } catch (error) {
      console.log(error);
      res.json({ mensaje: 'Hubo un error'});
   }
}


exports.autenticarUsuario = () => {


}