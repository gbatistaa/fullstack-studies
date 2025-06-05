import { DataTypes, Model } from "sequelize";
import connection from "../db/connection";
import PedidoType from "../interfaces/Pedido";

const Pedido = connection.define<Model<PedidoType>>("Pedido", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Cliente",
      key: "id",
    },
    field: "client_id",
  },
  valorTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "valor_total",
  },
  dataPedido: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "data_pedido",
  },
});

export default Pedido;
