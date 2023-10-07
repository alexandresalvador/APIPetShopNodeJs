const Cachorro = require("./cachorro.js");
const DataTypes = require("sequelize");
const Sequelize = require("../database.js");

const Atendimento = Sequelize.define(
  "atendimentos",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    dia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    horario: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    concluido: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cachorroId: {
      field: "cachorro_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cachorro,
        key: "id",
      },
    },
  },

  {
    createdAt: false,
    updatedAt: false,
  }
);

// Atendimento.belongsTo(Cachorro, {
//   as: "cachorros",
//   foreignKey: {
//     name: "cachorroId",
//     allowNull: false,
//   },
// });

// Cachorro.hasMany(Atendimento, {
//   as: "atendimentos",
//   foreignKey: {
//     name: "cachorroId",
//     allowNull: false,
//   },
// });

module.exports = Atendimento;
