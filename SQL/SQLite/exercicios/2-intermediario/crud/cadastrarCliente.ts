import ClienteType from "../interfaces/Cliente.js";
import Clientes from "../models/clientes.js";

const cadastrarCliente = async (cliente: ClienteType): Promise<ClienteType | void> => {
  try {
    const resultadoCadastro = await Clientes.create(cliente);
    return resultadoCadastro.toJSON();
  } catch (error) {
    console.log(error);
  }
};

export default cadastrarCliente;
