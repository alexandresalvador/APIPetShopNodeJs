const Atendimento = require("../models/atendimento.js");

class AtendimentoRepository {
  async GetAll() {
    return await Atendimento.findAll();
  }

  async GetById(id) {
    return await Atendimento.findOne({
      where: { id },
    });
  }

  async Add(atendimento) {
    await Atendimento.create(atendimento);
  }

  async Update(id, atendimento) {
    await Atendimento.update(atendimento, {
      where: { id },
    });
  }

  async Delete(id) {
    await Atendimento.destroy({
      where: { id },
    });
  }
}

module.exports = AtendimentoRepository;
