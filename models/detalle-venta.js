const mongoose = require('mongoose');

const detalleVentaSchema = new mongoose.Schema({
  id_detalle_venta: {
    type: Number,
    required: true,
    unique: true,
  },
  fk_id_producto: {
    type: Number,
    required: true,
  },
  valor_total: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  fk_id_venta: {
    type: Number,
    required: true,
  },
});

const DetalleVenta = mongoose.model('DetalleVenta', detalleVentaSchema);

module.exports = DetalleVenta;
