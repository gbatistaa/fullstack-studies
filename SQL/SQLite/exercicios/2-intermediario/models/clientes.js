import { DataTypes } from "sequelize";
import connection from "../db/connection.js";

const Cliente = connection.define("Cliente", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  data_cadastro: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Cliente;
