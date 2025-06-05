import PedidoType from "../interfaces/Pedido";

const criarNPedidos = (num: number): PedidoType[] => {
  let pedidos: PedidoType[] = [];

  for (let i = 0; i < num; i++) {
    const clientId = Math.floor(Math.random() * 4) + 1;
    const valorTotal = parseFloat((Math.random() * 1150 + 50).toFixed(2));
    const dataPedido = new Date();

    const pedido: PedidoType = {
      clientId: clientId,
      valorTotal: valorTotal,
      dataPedido: dataPedido,
    };

    pedidos.push(pedido);
  }

  return pedidos;
};

export default criarNPedidos;
