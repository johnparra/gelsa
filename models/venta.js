const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  id_venta: {
    type: Number,
    required: true,
    unique: true,
  },
  fk_id_vendedor: {
    type: Number,
    required: true,
  },
  fk_id_cliente: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
