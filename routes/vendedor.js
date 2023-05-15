const express = require('express');
const vendedorController = require('../controllers/vendedor');

const router = express.Router();

// Ruta POST para crear un nuevo vendedor
router.post('/', vendedorController.createVendedor);

// Resto de las rutas (getVendedores, getVendedorById, updateVendedorById, deleteVendedorById)

module.exports = router;
