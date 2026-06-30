const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Servir imagens da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas de autenticação
app.use('/api', authRoutes);

// Rotas de itens
app.use('/itens', itemRoutes);

module.exports = app;