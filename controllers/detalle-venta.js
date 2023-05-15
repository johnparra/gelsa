const DetalleVenta = require('../models/detalle-venta');

// Controlador para crear un nuevo detalle de venta
async function createDetalleVenta(req, res) {
  try {
    const { id_detalle_venta, fk_id_producto, valor_total, cantidad, fk_id_venta } = req.body;
    const detalleVenta = await DetalleVenta.create({ id_detalle_venta, fk_id_producto, valor_total, cantidad, fk_id_venta });
    res.json(detalleVenta);
  } catch (error) {
    console.error('Error al crear un nuevo detalle de venta:', error);
    res.status(500).json({ error: 'Error al crear un nuevo detalle de venta' });
  }
}

// Resto de los controladores (getDetallesVenta, getDetalleVentaById, updateDetalleVentaById, deleteDetalleVentaById)

module.exports = {
  createDetalleVenta,
  // Exporta el resto de los controladores aquí
};
