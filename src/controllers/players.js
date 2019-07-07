const Player = require('../models/player');

exports.login = async (req, res, next) => {
  const account = req.body.account;
  const password = req.body.password;

  try {
    const response = await Player.findOne({ account, password });

    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).send({ msg: `Erro ao realizar login => ${e}` });
  }
}

exports.create = async (req, res, next) => {
  const player = new Player(req.body);

  try {
    const response = await player.save();

    res.status(201).send(response)
  } catch (e) {
    return res.status(400).send({ msg: `Erro ao criar conta => ${e}` });
  }
}

exports.delete = async (req, res, next) => {
  const player = req.params.id;

  try {
    await Player.findByIdAndDelete({ _id: player })

    return res.status(200).send({ msg: 'Player excluido com sucesso.' });
  } catch (e) {
    return res.status(500).send({ msg: `Erro ao criar excluir player => ${e}` });
  }
}


exports.find = async (req, res, next) => {
  try {
    const response = await Player.find({}).sort('-createdAt');

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).send({ msg: `Erro ao buscar players => ${e}` });
  }
}

exports.save = async (req, res, next) => {
  const player = req.params.id;
  const data = req.body;

  try {
    const response = await Player.findByIdAndUpdate(player, data, { new: true });

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).send({ msg: `Erro ao buscar players => ${e}` });
  }
}

