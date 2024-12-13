const express = require('express');
const Game = require('../models/Game');
const router = express.Router();

// Cadastrar game
router.post('/', async (req, res) => {
  const { nome, genero, plataforma, preco } = req.body;
  const game = await Game.create({ nome, genero, plataforma, preco });
  res.json(game);
});

// Editar game
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  await Game.update(req.body, { where: { id } });
  res.sendStatus(204);
});

// Retornar lista com todos os games
router.get('/', async (req, res) => {
  const games = await Game.findAll();
  res.json(games);
});

// Retornar game pelo id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const game = await Game.findByPk(id);
  res.json(game);
});

// Excluir game
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Game.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;
