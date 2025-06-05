import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "sqlite",
  storage: "./my_intermed.db"
})

export default connection;
