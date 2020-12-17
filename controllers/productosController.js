const multer = require('multer');
const shortid = require('shortid');
const Productos = require('../models/Productos');

const configuracionMulter = {
   // limits: { fileSize: 100000 },
   storage: fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
         cb(null, __dirname+'../../uploads/');
      },
      filename: (req, file, cb) => {
         // console.log(file);
         
         // obtenemos la extensión del archvio
         const extension = file.mimetype.split('/');
         cb(null, `${shortid.generate()}.${extension[1]}`);
      }
   }),
   fileFilter: (req, file, cb) => {
      if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
         // el callback se ejecuta como true o false:
         // true: cuando la imagen se acepta - false: 
         cb(null, true);
      } else {
         cb(new Error('Formato no valido'), false);
      }
   },
}

// pasar la configuracion y el campo
const upload = multer(configuracionMulter).single('imagen');

// sube un archvio 
exports.subirArchivo = (req, res, next) => {
   upload(req, res, function(error) {
      if (error){
         res.json({mensaje: error})
      }
      return next();
   })
}

// Agrega un nuevo producto
exports.nuevoProducto = async (req, res, next) => {
   // TEST: console.log(req.body);

   // creamos el objeto con el modelo de mogoose
   const producto = new Productos(req.body);

   try {

      // si hay un archivo
      if(req.file.filename) {
         producto.imagen = req.file.filename
      }

      await producto.save();
      res.json({mensaje: 'Se agrego un nuevo producto'});
   } catch (error) {
      console.log(error);
      next();
   }
}

// mustra todos los productos
exports.mostrarProductos = async (req, res, next) => {
   try {
      // obtener todos los productos
      const productos = await Productos.find({});
      res.json(productos);
   } catch (error) {
      console.log(error);
      next();
   }
}