const express = require('express');
const empresaController = require('../controllers/empresa');

const router = express.Router();

// Ruta POST para crear una nueva empresa
router.post('/', empresaController.createEmpresa);

// Resto de las rutas (getEmpresas, getEmpresaById, updateEmpresaById, deleteEmpresaById)

module.exports = router;