const Empresa = require('../models/empresa');

// Controlador para crear una nueva empresa
async function createEmpresa(req, res) {
  try {
    const { id_empresa, nombre_empresa } = req.body;
    const empresa = await Empresa.create({ id_empresa, nombre_empresa });
    res.json(empresa);
  } catch (error) {
    console.error('Error al crear una nueva empresa:', error);
    res.status(500).json({ error: 'Error al crear una nueva empresa' });
  }
}

// Resto de los controladores (getEmpresas, getEmpresaById, updateEmpresaById, deleteEmpresaById)

module.exports = {
  createEmpresa,
  // Exporta el resto de los controladores aquí
};
