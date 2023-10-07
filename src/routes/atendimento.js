const express = require("express");
const AtendimentoController = require("../controllers/atendimento");

const atendimentoController = new AtendimentoController();

const router = express.Router();

router.get("/api/atendimentos", atendimentoController.GetAll);
router.get("/api/atendimento/:id", atendimentoController.GetById);
router.post("/api/atendimento", atendimentoController.Add);
router.put("/api/atendimento/:id", atendimentoController.Update);
router.delete("/api/atendimento/:id", atendimentoController.Delete);

module.exports = router;
