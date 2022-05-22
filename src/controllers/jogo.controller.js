const JogosService = require('../services/jogo.service');

const findAllJogosController = (req, res) => {
  const allJogos = JogosService.findAllJogosService();
  res.send(allJogos);
};

const findByIdJogoController = (req, res) => {
  const idParam = req.params.id;    
  if (!idParam) {
    return res.status(404).send({ message: 'jogo não encontrado!' });
  }
  const chosenJogo = JogosService.findJogoByIdService(idParam);
  res.send(chosenJogo);
};

const createJogoController = (req, res) => {
  const jogo = req.body;
  if (!jogo || !jogo.title || !jogo.type || !jogo.foto || !jogo.preco) {
    return res
      .status(400)
      .send(
        'Você não preencheu todos os dados para adicionar um novo jogo a loja!!',
      );
  }
  const newJogo = JogosService.createJogoService(jogo);
  res.send(newJogo);
};

const updateJogoController = (req, res) => {
  const idParam = +req.params.id;
  const jogoEdit = req.body;
  if (!idParam) {
    return res.status(404).send({ message: 'jogo não encontrado!' });
  }
  if (!jogoEdit || !jogoEdit.title || !jogoEdit.type || !jogoEdit.foto || !jogoEdit.preco) {
    return res
      .status(400)
      .send(
        'Você não preencheu todos os dados para editar este jogo na loja!!',
      );
  }
  const updatedJogo = JogosService.updateJogoService(idParam, jogoEdit);
  res.send(updatedJogo);
};

const deleteJogoController = (req, res) => {
  const idParam = req.params.id;
  if (!idParam) {
    return res.status(404).send({ message: 'jogo não encontrado!' });
  }
  JogosService.deleteJogoService(idParam);
  res.send({ message: 'Jogo deletado com sucesso!' });
};

module.exports = {
  findAllJogosController,
  findByIdJogoController,
  createJogoController,
  updateJogoController,
  deleteJogoController,
};
