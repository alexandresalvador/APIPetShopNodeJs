const Cliente = require("../models/cliente.js");
const Cachorro = require("../models/cachorro.js");

class ClienteRepository {
  async GetAll() {
    return await Cliente.findAll();
  }

  async GetById(id, transaction) {
    return await Cliente.findOne({
      where: { id },
      include: [{ model: Cachorro, as: "cachorros" }],
      transaction,
    });
  }

  async Add(cliente, transaction) {
    const result = await Cliente.create(cliente, { transaction });
    return result;
  }

  async Update(id, cliente) {
    await Cliente.update(cliente, {
      where: { id },
    });
  }

  async Delete(id) {
    await Cliente.destroy({
      where: { id },
    });
  }
}

module.exports = ClienteRepository;
