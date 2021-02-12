const jwt = require('jsonwebtoken');

module.exports = (req,res, next) => {

   // autorización por el header
   const authHeader = req.get('Authorization');

   if(!authHeader) {
      const error = new Error('No Autenticado, no hay JWT');
      error.statusCode = 401;
      throw error;
   }

   // obtener token y verificarlo
   /* 
      El token cuando se obtiene de authHeader viene asi:
          autorization: Bearer 5896e129868912689326
      Usamos authHeader.split(' ')[1]
      .split lo separa en un array: la [0]es el Bearer y [1] es el token   
   */
   const token = authHeader.split(' ')[1];
   // verificamos que sea un token valido (no se haya alterado, no este expirado)
   let revisarToken;
   try {

      revisarToken = jwt.verify(token, 'LLAVESECRETA');
      
   } catch (error) {
      error.statusCode = 500;
      throw error;
   }

   // Si es un token valido, pero hay algun error(por ejemplo que ya expiro)
   if(!revisarToken) {
      const error = new Error('No Autenticado');
      error.statusCode = 401;
      throw error;
   }

   // Si pasa verificar token y no hay errores
   next();

}