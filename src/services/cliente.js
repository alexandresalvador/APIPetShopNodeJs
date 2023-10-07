const ClienteRepository = require("../repositories/cliente.js");
const repository = new ClienteRepository();

class ClienteService {
  MensagemErroCliente = "Forneça todos os dados!";
  MensagemErroIndex = "Index inválido!";

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id, transaction) {
    return repository.GetById(id, transaction);
  }

  async Add(cliente, transaction) {
    if (!cliente) {
      throw new Error(this.MensagemErroCliente);
    }
    repository.Add(cliente, transaction);
  }

  async Update(id, cliente) {
    if (!cliente) {
      throw new Error(this.MensagemErroCliente);
    } else if (!id || isNaN(id)) {
      throw new Error(this.MensagemErroIndex);
    }
    repository.Update(id, cliente);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.MensagemErroIndex);
    }
    repository.Delete(id);
  }
}


module.exports = ClienteService;
