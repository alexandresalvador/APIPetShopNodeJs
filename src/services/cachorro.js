const CachorroRepository = require("../repositories/cachorro.js");
const repository = new CachorroRepository();

class CachorroService {
  MensagemErroCachorro = "Forneça todos os dados!";
  MensagemErroIndex = "Index inválido!";

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id) {
    return repository.GetById(id);
  }

  async Add(cachorro) {
    if (!cachorro) {
      throw new Error(this.MensagemErroCachorro);
    }
    repository.Add(cachorro);
  }

  async Update(id, cachorro) {
    if (!cachorro) {
      throw new Error(this.MensagemErroCachorro);
    } else if (!id || isNaN(id)) {
      throw new Error(this.MensagemErroIndex);
    }
    repository.Update(id, cachorro);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.MensagemErroIndex);
    }
    repository.Delete(id);
  }
}

module.exports = CachorroService;
