import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso com o sequelize");
} catch (error) {
  console.error("Não foi possível conectar", error);
}

export default sequelize;
