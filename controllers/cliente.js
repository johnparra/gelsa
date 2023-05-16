const Cliente = require('../models/cliente');

// Controlador para crear un nuevo cliente
async function createCliente(req, res) {
  try {
    const { id_cliente, num_documento, nombre, id_empresa } = req.body;
    const cliente = await Cliente.create({ id_cliente, num_documento, nombre, id_empresa });
    res.json(cliente);
  } catch (error) {
    console.error('Error al crear un nuevo cliente:', error);
    res.status(500).json({ error: 'Error al crear un nuevo cliente' });
  }
}

// Controlador para obtener todos los clientes
async function getClientes(req, res) {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      console.error('Error al obtener los clientes:', error);
      res.status(500).json({ error: 'Error al obtener los clientes' });
    }
}
// Resto de los controladores (getClientes, getClienteById, updateClienteById, deleteClienteById)

module.exports = {
  createCliente,
  getClientes
  // Exporta el resto de los controladores aquí
};
