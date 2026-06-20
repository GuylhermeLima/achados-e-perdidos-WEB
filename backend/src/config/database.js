const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "achados_perdidos", // nome do banco
    "root",             // usuário do MySQL
    "2003",            // senha do MySQL
    {
        host: "localhost",
        dialect: "mysql"
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