const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME || "achados_perdidos",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "",
    {
        host: process.env.DB_HOST || "localhost",
        dialect: "mysql",
        port: process.env.DB_PORT || 3306
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Conexão com MySQL realizada com sucesso!");
    })
    .catch((erro) => {
        console.error("Erro ao conectar:", erro);
    });

module.exports = sequelize;