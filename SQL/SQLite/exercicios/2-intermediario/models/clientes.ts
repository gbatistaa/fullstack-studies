import { DataTypes, Model } from "sequelize";
import connection from "../db/connection.js";
import ClienteType from "../interfaces/Cliente.js";

const Clientes = connection.define<Model<ClienteType>>(
  "Clientes",
  {
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
    dataCadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "data_cadastro",
    },
  },
  { timestamps: false },
);

export default Clientes;
