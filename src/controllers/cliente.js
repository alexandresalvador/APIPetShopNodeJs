const ClienteService = require("../services/cliente");
const service = new ClienteService();

class ClienteController {
  async GetAll(req, res) {
    try {
      const clientes = await service.GetAll();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const cliente = await service.GetById(id);
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const cliente = req.body;
      await service.Add(cliente);
      res.status(201).json({
        message: "cliente adicionado com sucesso!",
        cliente: cliente,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Update(req, res) {
    try {
      const id = req.params.id;
      let cliente = await service.GetById(id);
      cliente = req.body;
      await service.Update(id, cliente);
      res.status(200).json({
        message: "cliente atualizado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id;
      await service.Delete(id);
      res.status(200).json({
        message: "cliente deletado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = ClienteController;
