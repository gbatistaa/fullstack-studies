import { DataTypes } from "sequelize";
import db from "../db/connection.js";

// Criação de uma tabela no banco de dados chamada User
// nela colocamos as propriedades e também as constraints
// de cada propriedade, isso direto no banco de dados.

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default User;
