import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("emiliabot", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});