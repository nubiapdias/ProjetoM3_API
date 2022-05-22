const jogos = [
  {
    id: 1,
    title: 'Doki Doki',
    type: 'Otome',
    foto: 'public/imgs/R.png',
    preco: 10.0,
  },
  {
    id: 2,
    title: 'Minecraft',
    type: 'simulação',
    foto: 'public/imgs/Minecraft.jpg',
    preco: 10.0,
  },
  {
    id: 3,
    title: 'Fortnite',
    type: 'aventura',
    foto: 'public/imgs/f.jpg',
    preco: 20.0,
  },
  {
    id: 4,
    title: 'Dreamscaper',
    type: 'aventura',
    foto: 'public/imgs/d.jpg',
    preco: 11.0,
  },
];

const findAllJogosService = () => {
  return jogos;
};

const findJogoByIdService = (id) => {
  return jogos.find((jogo) => jogo.id == id);
};

const createJogoService = (newJogo) => {
  const novoId =
  jogos.length === 0 ? 1 : jogos[jogos.length - 1].id + 1;

const jogo = {
  id: novoId,
  sabor,
  descricao,
  foto,
  preco,
};

jogos.push(jogo);

return newJogo;

};

const updateJogoService = (idParam, jogoEdited) => {
  jogoEdited['id'] = idParam;
  const jogoIndex = jogos.findIndex((jogo) => jogo.id == idParam);
  jogos[jogoIndex] = jogoEdited;
  return jogoEdited;
};

const deleteJogoService = (idParam) => {
  const jogoIndex = jogos.findIndex((jogo) => jogo.id == idParam);
  return jogos.splice(jogoIndex, 1);
};

module.exports = {
  findAllJogosService,
  findJogoByIdService,
  createJogoService,
  updateJogoService,
  deleteJogoService,
};
