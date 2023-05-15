const Venta = require('../models/venta');

// Controlador para crear una nueva venta
async function createVenta(req, res) {
  try {
    const { id_venta, fk_id_vendedor, fk_id_cliente, fecha } = req.body;
    const venta = await Venta.create({ id_venta, fk_id_vendedor, fk_id_cliente, fecha });
    res.json(venta);
  } catch (error) {
    console.error('Error al crear una nueva venta:', error);
    res.status(500).json({ error: 'Error al crear una nueva venta' });
  }
}

// Resto de los controladores (getVentas, getVentaById, updateVentaById, deleteVentaById)

module.exports = {
  createVenta,
  // Exporta el resto de los controladores aquí
};
