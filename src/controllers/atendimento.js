const AtendimentoService = require("../services/atendimento");
const service = new AtendimentoService();

class AtendimentoController {
  async GetAll(req, res) {
    try {
      const atendimentos = await service.GetAll();
      res.status(200).json(atendimentos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const atendimentos = await service.GetById(id);
      res.status(200).json(atendimentos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const atendimento = req.body;
      await service.Add(atendimento);
      res.status(201).json({
        message: "Atendimento adicionado com sucesso!",
        atendimento: atendimento,
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
      let atendimento = await service.GetById(id);
      atendimento = req.body;
      await service.Update(id, atendimento);
      res.status(200).json({
        message: "Atendimento atualizado com sucesso!",
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
        message: "Atendimento deletado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = AtendimentoController;
