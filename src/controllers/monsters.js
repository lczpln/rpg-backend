const monsters =  require('../config/monsters');

exports.all = (req, res, next) => {
  res.json(monsters)
}

exports.getOne = (req, res, next) => {
  const name = req.params.name;
  const monster = monsters.find(monster => monster.name === name) || null;

  if(!monster) return res.status(404).send({ msg: "Criatura não encontrada." })

  return res.json(monster);
}