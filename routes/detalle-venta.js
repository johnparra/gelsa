const express = require('express');
const detalleVentaController = require('../controllers/detalle-venta');

const router = express.Router();

// Ruta POST para crear un nuevo detalle de venta
router.post('/', detalleVentaController.createDetalleVenta);

// Resto de las rutas (getDetallesVenta, getDetalleVentaById, updateDetalleVentaById, deleteDetalleVentaById)

module.exports = router;
