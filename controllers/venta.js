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

// Controlador para obtener todos los ventas
async function getVentas(req, res) {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    console.error('Error al obtener las ventas:', error);
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
}

// Controlador para obtener la información de una venta con campos relacionados
async function getVentaWithRelatedFields(req, res) {
  try {
    const venta = await Venta.aggregate([
      {
        $lookup: {
          from: 'vendedors', // Nombre de la colección relacionada (modelo Vendedor)
          localField: 'fk_id_vendedor',
          foreignField: 'id_vendedor',
          as: 'vendedor',
        },
      },
      {
        $lookup: {
          from: 'clientes', // Nombre de la colección relacionada (modelo Cliente)
          localField: 'fk_id_cliente',
          foreignField: 'id_cliente',
          as: 'cliente',
        },
      },
    ]);

    res.json(venta);
  } catch (error) {
    console.error('Error al obtener la información de la venta:', error);
    res.status(500).json({ error: 'Error al obtener la información de la venta' });
  }
}
// Resto de los controladores (getVentas, getVentaById, updateVentaById, deleteVentaById)

module.exports = {
  createVenta,
  getVentas,
  getVentaWithRelatedFields
  // Exporta el resto de los controladores aquí
};
