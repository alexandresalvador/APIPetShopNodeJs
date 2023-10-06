const DataTypes = require("sequelize");
const Sequelize = require("../database.js");

const Cachorro = Sequelize.define(
  "cachorros",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Cachorro;
