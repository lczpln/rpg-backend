const route = require('express').Router();
const bodyParser = require('body-parser');

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: false }));

const monsters = require('./controllers/monsters');
const player = require('./controllers/players');

route.get('/', (req, res, next) => {
  res.status(200).send({ msg: "RPG-API /v1" })
})

route.get('/monsters', monsters.all);
route.get('/monsters/:name', monsters.getOne);

route.post('/sso/login', player.login);

route.get('/player', player.find);
/* route.get('/player/:id', player.findById);
route.get('/player/:account', player.findByAccount) */
route.put('/player/:id', player.save);
route.post('/player', player.create);
route.delete('/player/:id', player.delete);

module.exports = route;