const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Rota de Cadastro
router.post('/cadastro', authController.cadastro);

// Rota de Login
router.post('/login', authController.login);

// Rota de Perfil (protegida)
router.get('/perfil', authenticateToken, authController.perfil);

module.exports = router;
