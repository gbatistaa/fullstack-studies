import Cliente from "../models/clientes.js";

const cadastrarCliente = async (): Promise<void> => {
  try {
    const resultadoCadastro = Cliente.create({});
    console.log(resultadoCadastro);
  } catch (error) {
    console.log(error);
  }
};

export default cadastrarCliente;
