import Cliente from "../models/clientes.js";

const cadastrarCliente = async () => {
  try {
    const resultadoCadastro = Cliente.create({
      
    })
  } catch (error) {
    console.log(error);
  }
}
