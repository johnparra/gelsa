const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  id_cliente: {
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
    type: Number,
    required: true,
  },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
