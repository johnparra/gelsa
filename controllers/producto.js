const Producto = require('../models/producto');

// Controlador para crear un nuevo producto
async function createProducto(req, res) {
  try {
    const { id_producto, nombre_producto } = req.body;
    const producto = await Producto.create({ id_producto, nombre_producto });
    res.json(producto);
  } catch (error) {
    console.error('Error al crear un nuevo producto:', error);
    res.status(500).json({ error: 'Error al crear un nuevo producto' });
  }
}

// Resto de los controladores (getProductos, getProductoById, updateProductoById, deleteProductoById)

module.exports = {
  createProducto,
  // Exporta el resto de los controladores aquí
};
