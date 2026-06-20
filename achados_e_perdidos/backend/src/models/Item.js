const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const Categoria = require("./Categoria");

const Item = sequelize.define(
    "Item",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },

        local: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM("PERDIDO", "ENCONTRADO"),
            allowNull: false
        },
        foto:{
            type:DataTypes.STRING
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_categoria: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    },{
        tableName: "item",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

Item.belongsTo(Categoria, {
    foreignKey: "id_categoria"
});

module.exports = Item;