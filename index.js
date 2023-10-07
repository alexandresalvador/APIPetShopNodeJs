const express = require("express");

const clienteRouter = require("./src/routes/cliente.js");
const cachorroRouter = require("./src/routes/cachorro.js");
const atendimentoRouter = require("./src/routes/atendimento.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(clienteRouter);
app.use(cachorroRouter);
app.use(atendimentoRouter);

app.listen(port, () => {
  console.log(`\nServidor rodando aqui: "http://localhost:${port}/api/"\n`);
});
