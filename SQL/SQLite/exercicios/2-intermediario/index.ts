import gerarPedido from "./crud/gerarPedido.js";
import criarNPedidos from "./data/listaPedidos.js";
import connection from "./db/connection.js";

const main = async (): Promise<void> => {
  try {
    await connection.sync();
    // for (const cliente of clientes) {
    //   const resultadoCadastroClientes = await cadastrarCliente(cliente);
    //   console.log(resultadoCadastroClientes);
    // }

    const pedidos = criarNPedidos(400);

    for (const pedido of pedidos) {
      const resultadoPedidoGerado = await gerarPedido(pedido);
      console.log(resultadoPedidoGerado);
    }
  } catch (error) {
    console.log(error);
  } finally {
    await connection.close();
  }
};

main();
