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

// Controlador para obtener los detalles de venta con campos relacionados
async function getDetallesVentaWithRelatedFields(req, res) {
  try {
    const detallesVenta = await DetalleVenta.aggregate([
      {
        $lookup: {
          from: 'productos', // Nombre de la colección relacionada (modelo Producto)
          localField: 'fk_id_producto',
          foreignField: 'id_producto',
          as: 'producto',
        },
      },
      {
        $lookup: {
          from: 'ventas', // Nombre de la colección relacionada (modelo Venta)
          localField: 'fk_id_venta',
          foreignField: 'id_venta',
          as: 'venta',
        },
      },
    ]);

    res.json(detallesVenta);
  } catch (error) {
    console.error('Error al obtener los detalles de venta:', error);
    res.status(500).json({ error: 'Error al obtener los detalles de venta' });
  }
}
// Resto de los controladores (getDetallesVenta, getDetalleVentaById, updateDetalleVentaById, deleteDetalleVentaById)

module.exports = {
  createDetalleVenta,
  getDetallesVentaWithRelatedFields
  // Exporta el resto de los controladores aquí
};
