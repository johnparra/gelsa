const express = require('express');
const clienteController = require('../controllers/cliente');

const router = express.Router();

// Ruta POST para crear un nuevo cliente
router.post('/', clienteController.createCliente);

// Resto de las rutas (getClientes, getClienteById, updateClienteById, deleteClienteById)

module.exports = router;
