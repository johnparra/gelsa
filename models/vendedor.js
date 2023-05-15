const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
  id_vendedor: {
    type: Number,
    required: true,
    unique: true,
  },
  num_documento: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  id_empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true,
  },
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;
