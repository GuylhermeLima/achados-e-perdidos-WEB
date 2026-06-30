const express = require('express');
const router = express.Router();
const upload = require("../config/multer");
const { authenticateToken } = require('../middlewares/authMiddleware');

const itemController = require("../controllers/itemController");

router.post(
    "/",
    authenticateToken,
    upload.single("foto"),
    itemController.criar
);

router.get("/", itemController.listar);

router.get("/:id", itemController.buscarPorId);

router.put("/:id", authenticateToken, itemController.atualizar);

router.delete("/:id", authenticateToken, itemController.deletar);

module.exports = router;