import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nodesequelize", "root", "jujubAOI312.", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
