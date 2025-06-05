import ClienteType from "../interfaces/Cliente";

const dataAtual = new Date();

const clientes: ClienteType[] = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@email.com",
    dataCadastro: dataAtual,
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    dataCadastro: dataAtual,
  },
  {
    id: 3,
    nome: "Carlos Pereira",
    email: "carlos.pereira@email.com",
    dataCadastro: dataAtual,
  },
  {
    id: 4,
    nome: "Ana Souza",
    email: "ana.souza@email.com",
    dataCadastro: dataAtual,
  },
  {
    id: 5,
    nome: "Pedro Costa",
    email: "pedro.costa@email.com",
    dataCadastro: dataAtual,
  },
];

export default clientes;
