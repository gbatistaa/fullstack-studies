import PedidoType from "../interfaces/Pedido";
import Pedidos from "../models/pedidos";

const gerarPedido = async (pedido: PedidoType): Promise<PedidoType | void> => {
  try {
    const resultadoPedidoGerado = await Pedidos.create(pedido);
    return resultadoPedidoGerado.toJSON();
  } catch (error) {
    console.log(error);
  }
};

export default gerarPedido;
