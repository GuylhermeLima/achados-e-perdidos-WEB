const express = require('express');
const cors = require('cors');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas de autenticação
app.use('/api', authRoutes);

// Rotas de itens
app.use('/itens', itemRoutes);

module.exports = app;