const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        telefone: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        senha: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        tipo_usuario: {
            type: DataTypes.ENUM('Aluno', 'Professor', 'Funcionário', 'Visitante', 'Administrador'),
            allowNull: false
        },
        matricula: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        codigo_professor: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        codigo_funcionario: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    },
    {
        tableName: "usuarios",
        timestamps: false
    }
);

module.exports = Usuario;
