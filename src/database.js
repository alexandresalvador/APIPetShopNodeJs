const { Sequelize } = require("sequelize");

const { development } = require("./config");

const conection = new Sequelize(development);


conection
  .sync()
  .then(() => console.log("\nConectado ao banco com sucesso!"))
  .catch((error) => console.log("Não foi conectado ao banco!\n\n", error));

module.exports = conection;
