const Vendedor = require('../models/vendedor');

// Controlador para crear un nuevo vendedor
async function createVendedor(req, res) {
  try {
    const { id_vendedor, num_documento, nombre, id_empresa } = req.body;
    const vendedor = await Vendedor.create({ id_vendedor, num_documento, nombre, id_empresa });
    res.json(vendedor);
  } catch (error) {
    console.error('Error al crear un nuevo vendedor:', error);
    res.status(500).json({ error: 'Error al crear un nuevo vendedor' });
  }
}

// Resto de los controladores (getVendedores, getVendedorById, updateVendedorById, deleteVendedorById)

module.exports = {
  createVendedor,
  // Exporta el resto de los controladores aquí
};
