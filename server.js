const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const gameRoutes = require('./routes/games');

const app = express();

app.use(bodyParser.json());

app.use('/games', gameRoutes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
