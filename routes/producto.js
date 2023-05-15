const express = require('express');
const productoController = require('../controllers/producto');

const router = express.Router();

// Ruta POST para crear un nuevo producto
router.post('/', productoController.createProducto);

// Resto de las rutas (getProductos, getProductoById, updateProductoById, deleteProductoById)

module.exports = router;
