const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  id_producto: {
    type: Number,
    required: true,
    unique: true,
  },
  nombre_producto: {
    type: String,
    required: true,
  },
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
