const express = require('express');
const router = express.Router();
const upload = require("../config/multer");

const itemController = require("../controllers/itemController");

router.post(
    "/",
    upload.single("foto"),
    itemController.criar
);

router.get("/", itemController.listar);

router.get("/:id", itemController.buscarPorId);

router.put("/:id", itemController.atualizar);

router.delete("/:id", itemController.deletar);

module.exports = router;