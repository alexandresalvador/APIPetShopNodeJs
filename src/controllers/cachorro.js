const CachorroService = require("../services/cachorro");
const service = new CachorroService();

class CachorroController {

  async GetAll(req, res) {
    try {
      const cachorros = await service.GetAll();
      res.status(200).json(cachorros);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const cachorros = await service.GetById(id);
      res.status(200).json(cachorros);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const cachorro = req.body;
      await service.Add(cachorro);
      res.status(201).json({
        message: "Cachorro adicionado com sucesso!",
        cachorro: cachorro,
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
      let cachorro = await service.GetById(id);
      cachorro = req.body;
      await service.Update(id, cachorro);
      res.status(200).json({
        message: "Cachorro atualizado com sucesso!",
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
        message: "Cachorro deletado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = CachorroController;
