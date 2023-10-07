const express = require("express");
const CachorroController = require("../controllers/cachorro");

const cachorroController = new CachorroController();

const router = express.Router();

router.get("/api/cachorros", cachorroController.GetAll);
router.get("/api/cachorro/:id", cachorroController.GetById);
router.post("/api/cachorro", cachorroController.Add);
router.put("/api/cachorro/:id", cachorroController.Update);
router.delete("/api/cachorro/:id", cachorroController.Delete);

module.exports = router;
