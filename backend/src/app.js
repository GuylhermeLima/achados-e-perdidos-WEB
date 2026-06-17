const express = require('express');

const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(express.json());

app.use('/itens', itemRoutes);

module.exports = app;