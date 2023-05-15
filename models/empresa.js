const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  id_empresa: {
    type: Number,
    required: true,
    unique: true,
  },
  nombre_empresa: {
    type: String,
    required: true,
  },
});

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa;