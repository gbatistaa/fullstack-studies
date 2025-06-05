import { DataTypes } from "sequelize";
import connection from "../db/connection";

const Pedido = connection.define("Pedido", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Cliente",
      key: "id",
    },
  },
  valor_total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  data_pedido: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Pedido;
