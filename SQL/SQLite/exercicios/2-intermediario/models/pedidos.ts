import { DataTypes, Model } from "sequelize";
import connection from "../db/connection.js";
import PedidoType from "../interfaces/Pedido.js";

const Pedidos = connection.define<Model<PedidoType>>(
  "Pedidos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Clientes",
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
  },
  { timestamps: false },
);

export default Pedidos;
