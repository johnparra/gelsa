const express = require('express');
const ventaController = require('../controllers/venta');

const router = express.Router();

// Ruta POST para crear una nueva venta
router.post('/', ventaController.createVenta);

router.get('/', ventaController.getVentas);

router.get('/withRelatedData', ventaController.getVentaWithRelatedFields);

// Resto de las rutas (getVentas, getVentaById, updateVentaById, deleteVentaById)

module.exports = router;
