import { DataTypes } from "sequelize";
import connection from "../db/connection";

const Pedido = connection.define("Pedido", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
})

export default Pedido;
