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


exports.autenticarUsuario = async (req, res, next) => {

   // buscar el usuario si existe
   const {email, password} = req.body;   
   const usuario = await Usuarios.findOne({ email });
   
   if(!usuario) {
      // si el usuario NO existe
      await res.status(401).json({mensaje: 'Ese usuario no esta registrado'});
      next();
   } else {
      // si el usuario SI existe
      // Primero verificamos si el password es incorrecto
      // password -> viene del formulario | usuario.password -> es el passwor en la db
      if(!bcrypt.compareSync(password, usuario.password)) {
         //Si el password es incorrecto
         await res.status(401).json({ mensaje: 'Password Incorrecto' });
         next();
      } else {
         // Si password correcto se firma el token
         /*
            Para generar el token se usa jwt.sign({})
            1.-Payload           -> son los datos del usuario que esta en la DB
            2.- SecretPrivateKey -> es un string propio 
            3.- Opctios          -> se configura fecha de expiracion
         */
         const token = jwt.sign({
            email: usuario.email,
            nombre: usuario.nombre,
            id: usuario._id
         }, 
           'LLAVESECRETA',
         {
            expiresIn: '1h'
         });

         // retornamos el token
         res.json({ token });
      }
   }

}