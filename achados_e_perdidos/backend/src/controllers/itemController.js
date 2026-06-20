const itemService = require("../services/itemService");

class ItemController {

    async criar(req, res) {
        try {

            if (req.file) {
                req.body.foto = req.file.filename;
            }

            const item = await itemService.criarItem(req.body);

            res.status(201).json(item);

        } catch (erro) {

            res.status(400).json({
                erro: erro.message
            });

        }
    }

    async listar(req, res) {
        try {

            const itens = await itemService.listarItens(req.query);

            res.status(200).json(itens);

        } catch (erro) {

            res.status(500).json({
                erro: erro.message
            });

        }
    }

    async buscarPorId(req, res) {

        try {

            const item = await itemService.buscarPorId(req.params.id);

            if (!item) {
                return res.status(404).json({
                    mensagem: "Item não encontrado"
                });
            }

            res.status(200).json(item);

        } catch (erro) {

            res.status(500).json({
                erro: erro.message
            });

        }

    }

    async atualizar(req, res) {

        try {

            const item = await itemService.atualizarItem(
                req.params.id,
                req.body
            );

            if (!item) {
                return res.status(404).json({
                    mensagem: "Item não encontrado"
                });
            }

            res.status(200).json(item);

        } catch (erro) {

            res.status(400).json({
                erro: erro.message
            });

        }

    }

    async deletar(req, res) {

        try {

            const removido = await itemService.deletarItem(
                req.params.id
            );

            if (!removido) {
                return res.status(404).json({
                    mensagem: "Item não encontrado"
                });
            }

            res.status(204).send();

        } catch (erro) {

            res.status(500).json({
                erro: erro.message
            });

        }

    }

}
    
module.exports = new ItemController();