const Cliente = require("./cliente.js");
const Atendimento = require("./atendimento.js");
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
    raca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clienteId: {
      field: "cliente_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,
        key: "id",
      },
    },
  },

  {
    createdAt: false,
    updatedAt: false,
  }
);

Atendimento.belongsTo(Cachorro, {
  as: "cachorros",
  foreignKey: {
    name: "cachorroId",
    allowNull: false,
  },
});

Cachorro.hasMany(Atendimento, {
  as: "atendimentos",
  foreignKey: {
    name: "cachorroId",
    allowNull: false,
  },
});

module.exports = Cachorro;
