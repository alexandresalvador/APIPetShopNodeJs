const AtendimentoRepository = require("../repositories/atendimento.js");
const repository = new AtendimentoRepository();

class AtendimentoService {
  MensagemErroAtendimento = "Forneça todos os dados!";
  MensagemErroIndex = "Index inválido!";

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id) {
    return repository.GetById(id);
  }

  async Add(atendimento) {
    if (!atendimento) {
      throw new Error(this.MensagemErroAtendimento);
    }
    repository.Add(atendimento);
  }

  async Update(id, atendimento) {
    if (!atendimento) {
      throw new Error(this.MensagemErroAtendimento);
    } else if (!id || isNaN(id)) {
      throw new Error(this.MensagemErroIndex);
    }
    repository.Update(id, atendimento);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.MensagemErroIndex);
    }
    repository.Delete(id);
  }
}

module.exports = AtendimentoService;
