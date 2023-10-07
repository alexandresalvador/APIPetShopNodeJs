const express = require("express");
const ClienteController = require("../controllers/cliente");

const clienteController = new ClienteController();

const router = express.Router();

router.get("/api/clientes", clienteController.GetAll);
router.get("/api/cliente/:id", clienteController.GetById);
router.post("/api/cliente", clienteController.Add);
router.put("/api/cliente/:id", clienteController.Update);
router.delete("/api/cliente/:id", clienteController.Delete);

module.exports = router;
