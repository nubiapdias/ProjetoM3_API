const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const jogosController = require('../controllers/jogo.controller');

router.get('/find-jogos', jogosController.findAllJogosController);
router.get('/find-jogos/:id', jogosController.findByIdJogoController);
router.post('/create', jogosController.createJogoController);
router.put('/update/:id', jogosController.updateJogoController);
router.delete('/delete/:id', jogosController.deleteJogoController);

module.exports = router;
