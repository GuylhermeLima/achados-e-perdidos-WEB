const { Op } = require("sequelize")
const Categoria = require("../models/Categoria");
const Item = require("../models/Item");

class ItemService {

    async criarItem(dados) {

        const categoria = await Categoria.findByPk(
            dados.id_categoria
        )

        if (!categoria){
            throw new Error("Categoria não encontrada");
        }

        if (!dados.descricao?.trim()) {
            throw new Error("Descrição é obrigatória");
        }

        if (!dados.local?.trim()) {
            throw new Error("Local é obrigatório");
        }

        if (!dados.data) {
            throw new Error("Data é obrigatória");
        }

        if (!dados.id_categoria) {
            throw new Error("Categoria é obrigatória");
        }

        if (!["PERDIDO", "ENCONTRADO"].includes(dados.status)) {
            throw new Error(
                "Status deve ser PERDIDO ou ENCONTRADO"
            );
        }

        const novoItem = await Item.create({
            descricao: dados.descricao,
            local: dados.local,
            data: dados.data,
            status: dados.status,
            foto: dados.foto,
            id_usuario: dados.id_usuario,
            id_categoria: dados.id_categoria
        });

        return novoItem;
    }

    async buscarPorId(id) {

        const item = await Item.findByPk(id);

        return item;
    }

    async listarItens(filtros){
        const where = {};

        if (filtros.status) {
            where.status = filtros.status;
        }

        if (filtros.categoria) {
            where.id_categoria = filtros.categoria;
        }

        if (filtros.descricao) {
            where.descricao = {
                [Op.like]: `%${filtros.descricao}%`
            };
        }

        const itens = await Item.findAll({
            where,
            include: Categoria
        });

        return itens;
    }

    async atualizarItem(id, dados) {
        const item = await Item.findByPk(id);
        
        if(!item) {
            return null;
        }

        await item.update(dados);

        return item;
    }

    async deletarItem(id) {
        const item = await Item.findByPk(id);

        if(!item) {
            return false;
        }

        await item.destroy();

        return true;
    }

}

module.exports = new ItemService();